import { Request, Response } from "express";
import RabbitmqServer from "../rabbitmq-server";
import { ExtratoService } from "./extrato.service";


export class ExtratoController {

    private service: ExtratoService;
    private server: RabbitmqServer;

    constructor() {
        this.service = new ExtratoService();
        this.server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
    }

    async create(request: Request, response: Response) {

        // const { 
        //     nome,
        //     descricao,
        //     valor,
        //     quantidade,
        //     dataVenda
        // };

        // const extrato = await this.service.create({
        //     nome,
        //     descricao,
        //     valor,
        //     quantidade,
        //     dataVenda
        // });
        await this.server.start();
        await this.server.consume('extrato', (message) => {
            console.log(message?.content.toString());
            console.log('foi!!!');
        });

        response.send({message: 'é pra ter ido'});
    }

}