import { Request, Response } from "express";
import RabbitmqServer from "../rabbitmq-server";
import { VendaService } from "./venda.service";


export class VendaController {

    private service: VendaService;
    private server: RabbitmqServer;

    constructor() {
        this.service = new VendaService();
        this.server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
    }

    async create(request: Request, response: Response) {
        let { produtoId, quantidade } = request.body;

        const result = await this.service.create({ produtoId , quantidade });
        if(result instanceof Error){
            response.status(400).send(result.message);
            return;
        }

        try {
            //SEND to RABBITMQ
            await this.server.start();
            await this.server.publishInQueue('extrato', JSON.stringify(result));
        } catch(e) {
            console.log(e);
        }
        

        response.json(result);
    }

    async read(request: Request, response: Response){
        const vendas = await this.service.read();

        response.json(vendas);
    }

}