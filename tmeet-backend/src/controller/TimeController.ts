import {Time} from "../entity/time"
import {getConnection} from "typeorm";

export class TimeController{

    static addTime = async (req, res) => {
        const {email, timetable} = req.body;

        const time = new Time();
        time.email = email;
        time.timetable = timetable;

        const result = await getConnection().getRepository(Time).save(time);

        res.status(200).send({check:"저장되었습니다."});
    }

    static loadTime = async (req, res) => {
        const repository = getConnection().getRepository(Time);

        const { timetable } = await repository.findOneBy({time_id: req.query.time_id});
        console.log(req.params.time_id);

        res.status(200).send(timetable);
    }
}