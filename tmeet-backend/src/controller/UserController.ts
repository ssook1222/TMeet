import {User} from "../entity/user"
import {getConnection} from "typeorm";

export class UserController{

    static addUser = async (req, res) => {
        const {email, password, nickname, subway} = req.body;

        const user = new User();
        user.nickname = nickname;
        user.email = email;
        user.password = password;
        user.subway = subway;

        const result = await getConnection().getRepository(User).save(user);

        res.status(200).send({check:"회원가입에 성공하였습니다."});
    }

}