import {Router} from "express";
import {UserController} from "../controller/UserController";
import {TimeController} from "../controller/TimeController";
import {SubwayController} from "../controller/SubwayController";
import {WeatherController} from "../controller/WeatherController";
import {MeetingController} from "../controller/MeetingController";
import {CommentController} from "../controller/CommentController";
import {User} from "../entity/user";
import {Meeting} from "../entity/meeting";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);
routes.post('/nickname',UserController.findNickname);

routes.get('/search-subway/:item',SubwayController.subwaySearch);
routes.get('/time', TimeController.loadTime);
routes.post('/time', TimeController.addTime);
routes.get('/meeting', MeetingController.loadThead);
routes.post('/meeting', MeetingController.addMeeting);
routes.post('/subway-test',SubwayController.subwayTest);
routes.post('/subway',SubwayController.findSubway);
routes.get('/subway-time/:start/:goal',SubwayController.subwayTime);

routes.get('/find-nickname',UserController.findNickname);
routes.post('/meeting-people',MeetingController.addPeople);
routes.post('/meeting-people-lookup',MeetingController.lookupPeople);
routes.get('/meeting-search', MeetingController.searchByMeetingid);

routes.post('/comment', CommentController.addComment);
routes.get('/comments/:meeting_id', CommentController.findAllComment);
routes.delete('/comment/:id', CommentController.removeComment);

routes.get('/weather-short/:meeting_id',WeatherController.weatherShortLookRequest);
routes.get('/weather-medium/:meeting_id',WeatherController.weatherMediumLookRequest);

export default routes;
