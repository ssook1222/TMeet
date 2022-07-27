import {Router} from "express";
import {UserController} from "../controller/UserController";
import {MapController} from "../controller/MapController";
import {TimeController} from "../controller/TimeController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);
routes.post('/nickname',UserController.findNickname);

routes.get('/map',MapController.mapTest);
routes.post('/time', TimeController.addTime);

export default routes;