import { Router } from "express";
import { VendaController } from "./venda.controller";


const routes = Router();
const source: string = "/venda";
const controller: VendaController = new VendaController();

routes.post(source, (req, res) => controller.create(req, res));
routes.get(source, (req, res) => controller.read(req, res));
export { routes };