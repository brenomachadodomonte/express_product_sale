import { Request, Response } from "express";
import { ExtratoService } from "./extrato.service";


export class ExtratoController {


    private service: ExtratoService;

    constructor() {
        this.service = new ExtratoService();
    }

    async create(request: Request, response: Response) {

        const { 
            nome,
            descricao,
            valor,
            quantidade,
            dataVenda
        } = request.body;

        const extrato = await this.service.create({
            nome,
            descricao,
            valor,
            quantidade,
            dataVenda
        });

        response.json(extrato);
    }

}