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

    //이메일 저장하면 아이디를 리턴하는 함수
    //...그냥 이메일을 pk로 만드는 게 낫지 않았을까...?
    static matchID = async (req, res) => {
        const email = req.body.email;
        const result = await getConnection().getRepository(User).findOne({where: {email}});
        return res.status(200).send({id: result.id});
    }

    static findNickname = async (req, res) => {
        const nickname = req.body.nickname;

        const result = await getConnection().getRepository(User).findOne({where:{nickname}});
        console.log(result.email, result.id, result.nickname);

        return res.status(200).send({id:result.id, email: result.email, nickname: result.nickname, subway: result.subway})
    }

}