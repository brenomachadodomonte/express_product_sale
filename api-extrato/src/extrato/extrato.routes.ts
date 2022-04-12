import { Router } from "express";
import { ExtratoController } from "./extrato.controller";


const routes = Router();
const source: string = "/extrato";
const controller: ExtratoController = new ExtratoController();

routes.post(source, (req, res) => controller.create(req, res));
routes.get(source, (req, res) => controller.read(req, res))

export { routes };