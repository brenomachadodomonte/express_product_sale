import { Router } from "express";
import { ExtratoController } from "./extrato.controller";


const routes = Router();
const source: string = "/produto";
const controller: ExtratoController = new ExtratoController();

routes.post(source, (req, res) => controller.create(req, res));


export { routes };