import { Request, Response } from "express";
import { ProdutoService } from "./produto.service";

export class ProdutoController {

    private service: ProdutoService;
    constructor() {
        this.service = new ProdutoService();
    }

    async create(request: Request, response: Response){
        const { nome, descricao, valor } = request.body;
        
        const result = await this.service.create({ nome, descricao, valor });

        response.json(result);
    }

    async read(request: Request, response: Response){
        const { nome, descricao, valor } = request.params;
        const produtos = await this.service.read({ nome, descricao, valor });

        response.json(produtos);
    }

    async readById(request: Request, response: Response){
        const { id } = request.params;
        const produto = await this.service.readById(id);

        response.json(produto);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { nome, descricao, valor } = request.body;

        const produto = await this.service.update(id, { nome, descricao, valor });
        response.json(produto);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        
        await this.service.delete(id);
        response.status(200).json({message: 'Produto excluído com sucesso!'});
    }
}