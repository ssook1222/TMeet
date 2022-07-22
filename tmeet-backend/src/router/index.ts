import {Router} from "express";
import {UserController} from "../controller/UserController";
import {MapController} from "../controller/MapController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);
routes.get('/map',MapController.mapTest);

export default routes;