import { Router } from "express";
import { ProdutoController } from "./produto.controller";


const routes = Router();
const source: string = "/produto";
const controller: ProdutoController = new ProdutoController();

routes.post(source, (req, res) => controller.create(req, res));
routes.get(source, (req, res) => controller.read(req, res));
routes.get(`${source}/:id`, (req, res) => controller.readById(req, res));
routes.patch(`${source}/:id`, (req, res) => controller.update(req, res));
routes.put(`${source}/:id`, (req, res) => controller.update(req, res));
routes.delete(`${source}/:id`, (req, res) => controller.delete(req, res));

export { routes };