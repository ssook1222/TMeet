import {Router} from "express";
import {UserController} from "../controller/UserController";
import {MapController} from "../controller/MapController";
import {SubwayController} from "../controller/SubwayController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);
routes.post('/nickname',UserController.findNickname);

routes.get('/map',MapController.mapTest);
routes.post('/subway-test',SubwayController.subwayTest);
routes.post('/subway',SubwayController.findSubway);

export default routes;