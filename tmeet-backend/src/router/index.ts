import {Router} from "express";
import {UserController} from "../controller/UserController";
import {WeatherControllerMedium} from "../controller/WeatherController";
import {WeatherControllerShort} from "../controller/WeatherController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);


export default routes;