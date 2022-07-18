import {Router} from "express";
import {UserController} from "../controller/UserController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);
routes.post('/return-id',UserController.matchID);

export default routes;