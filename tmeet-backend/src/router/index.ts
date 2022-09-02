import {Router} from "express";
import {UserController} from "../controller/UserController";
import {TimeController} from "../controller/TimeController";
import {SubwayController} from "../controller/SubwayController";
import {WeatherController} from "../controller/WeatherController";
import {MeetingController} from "../controller/MeetingController";
import {CommentController} from "../controller/CommentController";

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

routes.get('/weather',WeatherController.weatherLookRequest);
routes.post('/meeting-people',MeetingController.addPeople);

routes.post('/comment', CommentController.addComment);
routes.get('/comments', CommentController.findAllComment);
// routes.get('/comment', CommentController.findOneComment);
// routes.put('/comment', CommentController.modifyComment);
// routes.delete('/comment', CommentController.removeComment);

export default routes;
