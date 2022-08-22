import {Router} from "express";
import {UserController} from "../controller/UserController";
import {MapController} from "../controller/MapController";
import {TimeController} from "../controller/TimeController";
import {SubwayController} from "../controller/SubwayController";
import {MeetingController} from "../controller/MeetingController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);
routes.post('/nickname',UserController.findNickname);

routes.get('/map',MapController.mapTest);
routes.get('/time', TimeController.loadTime);
routes.post('/time', TimeController.addTime);
routes.get('/meeting', MeetingController.loadThead);
routes.post('/meeting', MeetingController.addMeeting);
routes.post('/subway-test',SubwayController.subwayTest);
routes.post('/subway',SubwayController.findSubway);


export default routes;
