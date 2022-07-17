import {Router} from "express";
import {UserController} from "../controller/UserController";

const routes = Router();

routes.post('/sign-up', UserController.addUser);
routes.post('/log-in', UserController.findUser);

export default routes;