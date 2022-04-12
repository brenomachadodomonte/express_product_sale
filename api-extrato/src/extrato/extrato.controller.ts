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

        await this.server.start();
        await this.server.consume('extrato', async (message) => {
            const venda = JSON.parse(message?.content.toString());
            const extrato = await this.service.create({
                nome: venda.produto.nome,
                descricao: venda.produto.descricao,
                valor: venda.produto.valor,
                quantidade: venda.quantidade,
                dataVenda: venda.data
            });

            console.log('EXTRATO CRIADO', extrato);
        });

        response.send({message: 'Lendo fila RabbitMQ'});
    }

    async read(request: Request, response: Response) {
        const extratos = await this.service.read();

        response.send(extratos);
    }

}