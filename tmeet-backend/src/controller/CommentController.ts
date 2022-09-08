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

        res.send(comment);
    }

    static findAllComment = async (req, res) => {
        const {meeting_id} = req.query;

        // const boards = await getConnection().getRepository(Comment).find({ where: { board_id: board_id } });
        const meeting = await getConnection().getRepository(Meeting)
            .findOne({relations: ["comments"], where: {meeting_id: meeting_id}, order: {meeting_id: 'DESC'}});

        res.send(meeting.comments);
    }

    // static findOneComment = async (req, res) => {
    //     const {id} = req.query;
    //
    //     const comment = await getConnection().getRepository(Comment).findOneBy({id});
    //     console.log(comment);
    //     res.send(comment);
    // }
    //
    // static modifyComment = async (req, res) => {
    //     const {id, content} = req.body;
    //
    //     const result = await getConnection().createQueryBuilder().update(Comment)
    //         .set({content})
    //         .where("id = :id", {id})
    //         .execute();
    //
    //     res.send(result);
    // }
    //
    // static removeComment = async (req, res) => {
    //     const {id} = req.query;
    //
    //     const result = await getConnection()
    //         .createQueryBuilder()
    //         .delete()
    //         .from(Comment)
    //         .where("id = :id", {id})
    //         .execute();
    //
    //     res.send(result);
    // }
}
