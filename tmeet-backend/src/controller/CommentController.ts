import {Comment} from "../entity/Comment";
import {getConnection} from "typeorm";
import {Meeting} from "../entity/meeting";
import {User} from "../entity/user";

export class CommentController {
    static addComment = async (req, res) => {
        const {board_id, content, user_id} = req.body;

        //meeting, user 관계설정
        // const meeting = await getConnection().getRepository(Meeting).findOne({id: meeting_id});
        // const user = await getConnection().getRepository(User).findOne({id: id});

        const comment = new Comment();
        comment.content = content;
        //관계설정 해결 후
        // comment.meeting = meeting;
        // comment.user = user;
        await getConnection().getRepository(Comment).save(comment);

        res.send(comment);
    }


    // static findAllComment = async (req, res) => {
    //     const {board_id} = req.query;
    //
    //     const result = await getConnection().getRepository(Comment).createQueryBuilder('comment')
    //         .innerJoinAndSelect('comment.board', 'board')
    //         .innerJoinAndSelect('comment.user', 'user')
    //         .where('board.id=:board_id', {board_id})
    //         .getMany()
    //     console.log(result);
    //     res.send(result);
    //
    //     // const boards = await getConnection().getRepository(Comment).find({ where: { board_id: board_id } });
    //     /*    const board = await getConnection().getRepository(Board)
    //           .findOne({relations: ["comments"], where: {id: board_id}, order: {id: 'DESC'}});
    //         res.send(board.comments);*/
    // }
    //
    // static findOneComment = async (req, res) => {
    //     const {id} = req.query;
    //
    //     const comment = await getConnection().getRepository(Comment).findOne({id});
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