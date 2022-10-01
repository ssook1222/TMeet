import {Comment} from "../entity/comment";
import {getConnection} from "typeorm";
import {Meeting} from "../entity/meeting";
import {User} from "../entity/user";

export class CommentController {
    static addComment = async (req, res) => {
        const {meeting_id, content, user_id} = req.body;

        const meeting = await getConnection().getRepository(Meeting).findOneBy({meeting_id: meeting_id});
        const user = await getConnection().getRepository(User).findOneBy({id: user_id});

        const comment = new Comment();
        comment.content = content;
        comment.meeting = meeting;
        comment.user = user;
        await getConnection().getRepository(Comment).save(comment);

        res.header("Access-Control-Allow-Origin", "*").send(comment);
    }
    //body_raw_json
    //{
    // "comtent" : "",
    // "meeting_id" : 1,
    // "user_id : 2
    // }


    static findAllComment = async (req, res) => {
        const meeting_id = req.params.meeting_id;

        // //user nickname 표시 안됨
        // const meeting = await getConnection().getRepository(Meeting)
        //     .findOne({relations: ["comments"], where: {meeting_id: meeting_id}});
        //
        // res.send(meeting.comments);

        //전체 댓글을 가져옴(미팅별 댓글 불가)
        const result = await getConnection().getRepository(Comment).createQueryBuilder('comment')
            .innerJoinAndSelect('comment.meeting', 'meeting')
            .innerJoinAndSelect('comment.user', 'user')
            .getMany()

        res.header("Access-Control-Allow-Origin", "*").send(result);

        //  //where절 에러
        // const result = await getConnection().getRepository(Comment).createQueryBuilder('comment')
        //     .innerJoinAndSelect('comment.meeting', 'meeting')
        //     .innerJoinAndSelect('comment.user', 'user')
        //     .where('meeitng.id=:meeting_id', {meeting_id})
        //     .getMany()
        //
        // res.header("Access-Control-Allow-Origin", "*").send(result);

    }

    static removeComment = async (req, res) => {
        const id = req.params.id;

        const result = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Comment)
            .where("id = :id", {id})
            .execute();

        res.send(result);
    }


}
