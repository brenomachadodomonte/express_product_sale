import { Request, Response } from "express";
import { EstoqueService } from "./estoque.service";

export class EstoqueController {

    private service: EstoqueService;
    
    constructor() {
        this.service = new EstoqueService();
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
        const { nome, descricao, valor } = request.params;
        const estoques = await this.service.read({ nome, descricao, valor });

        response.json(estoques);
    }

    async readById(request: Request, response: Response){
        const { id } = request.params;
        const produto = await this.service.readById(id);

        response.json(produto);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { quantidade } = request.body;

        const produto = await this.service.update(id, { quantidade });
        response.json(produto);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        
        await this.service.delete(id);
        response.status(200).json({message: 'Estoque excluído com sucesso!'});
    }
}