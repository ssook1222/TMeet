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

    static findUser = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        if(email==undefined && password!=undefined) {
            return res.status(200).send({loginSuccess:false, message:"이메일 값이 전송되지 않았습니다."});
        }
        else if(email!=undefined && password==undefined){
            return res.status(200).send({loginSuccess:false, message:"비밀번호 값이 전송되지 않았습니다."});
        }

        else if(email==undefined && password==undefined){
            return res.status(200).send({loginSuccess:false, message:"이메일, 비밀번호 값이 전송되지 않았습니다."});
        }

        const result = await getConnection().getRepository(User).findOne({where:{email, password}});
        console.log(result);

        if(email!=undefined&&password!=undefined){
            if(result!=null){
                return res.status(200).send({loginSuccess:true, message:"로그인에 성공하였습니다."});
            }
            else{
                return res.status(200).send({loginSuccess:false, message:"로그인에 실패하였습니다."});
            }
        }

    }
}