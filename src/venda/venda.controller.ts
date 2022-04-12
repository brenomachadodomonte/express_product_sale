import { Request, Response } from "express";
import { VendaService } from "./venda.service";


export class VendaController {

    private service: VendaService;

    constructor() {
        this.service = new VendaService();
    }

    async create(request: Request, response: Response) {
        let { produtoId, quantidade } = request.body;

        const result = await this.service.create({ produtoId , quantidade });
        if(result instanceof Error){
            response.status(400).send(result.message);
            return;
        }

        response.json(result);
    }

    async read(request: Request, response: Response){
        const vendas = await this.service.read();

        response.json(vendas);
    }

}