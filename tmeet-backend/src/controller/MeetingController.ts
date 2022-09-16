import {getConnection, getRepository} from "typeorm";
import {Time} from "../entity/time";
import {User} from "../entity/user"
import {Meeting} from "../entity/meeting"


export class MeetingController {

    static addMeeting = async (req, res) => {
        const {user_array, is_regular, thead} = req.body;

        const meeting = new Meeting();
        meeting.user = user_array;
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

    static addPeople = async (req, res) => {
        const id = req.body.id
        const meeting_id = req.body.meeting_id
        const result = await getConnection().getRepository(User).findOne({where:{id}})

        console.log(result)

        const result2 = await getConnection().getRepository(Meeting).findOne({where:{meeting_id}})

        console.log(result2)

        const user_repo = new User()

        user_repo.meeting = meeting_id
        user_repo.id = result.id
        user_repo.nickname = result.nickname
        user_repo.subway = result.subway
        user_repo.email = result.email
        user_repo.password = result.password

        const lookupResult = await getConnection()
            .getRepository(User)
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.meeting", "user_meeting")
            .where('user.id = :id', {id: user_repo.id})
            .getMany()

        if(lookupResult!==undefined){
            const updateResult = await getConnection()
                .getRepository("user_meeting")
                .createQueryBuilder("user_meeting")
                .update()
                .where('id = :id', {id: user_repo.id})
                .set({
                    id:result.id,
                    meeting_array:meeting_id
                })
                .execute();
        }

        else if(lookupResult===undefined){
            const addResult = await getConnection()
                .getRepository("user_meeting")
                .createQueryBuilder("user_meeting")
                .where('id = :id', {id: user_repo.id})
                .insert().into("user_meeting").values({
                    id:result.id,
                    meeting_array:meeting_id
                })
                .execute()
        }
        res.status(200).send(lookupResult)
    }

    static searchByMeetingid = async(req, res) => {
        const searchResult = await getConnection()
            .getRepository("user_meeting")
            .createQueryBuilder("user_meeting")
            .where('meeting_array = :meeting_id', {meeting_id: req.query.meeting_id})
            .execute()
        console.log(searchResult);
        res.status(200).send(searchResult);
    }
}


