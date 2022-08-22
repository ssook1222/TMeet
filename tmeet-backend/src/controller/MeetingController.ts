import {Meeting} from "../entity/meeting"
import {getConnection} from "typeorm";
import {Time} from "../entity/time";

export class MeetingController {

    static addMeeting = async (req, res) => {
        const {user_array, is_regular, thead} = req.body;

        const meeting = new Meeting();
        meeting.user_array = user_array;
        meeting.is_regular = is_regular;
        meeting.thead = thead;


        const result = await getConnection().getRepository(Meeting).save(meeting);

        res.status(200).send({check: "저장되었습니다."});
    }

    static loadThead = async (req, res) => {
        const repository = getConnection().getRepository(Meeting);

        const { thead } = await repository.findOneBy({meeting_id: req.query.meeting_id});
        console.log(req.params.thead);

        res.status(200).send(thead);
    }
}
