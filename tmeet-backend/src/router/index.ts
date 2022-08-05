import {Router} from "express";
import {UserController} from "../controller/UserController";
import {WeatherControllerMedium} from "../controller/WeatherController";
import {WeatherControllerShort} from "../controller/WeatherController";
import {MapController} from "../controller/MapController";
import {TimeController} from "../controller/TimeController";
import {SubwayController} from "../controller/SubwayController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);
routes.post('/nickname',UserController.findNickname);

routes.get('/map',MapController.mapTest);
routes.get('/time', TimeController.loadTime);
routes.post('/time', TimeController.addTime);
routes.post('/subway-test',SubwayController.subwayTest);
routes.post('/subway',SubwayController.findSubway);


export default routes;