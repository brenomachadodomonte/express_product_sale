import { Request, Response } from "express";
import { runInThisContext } from "vm";
import { ProdutoService } from "./produto.service";

export class ProdutoController {

    private service: ProdutoService;
    constructor() {
        this.service = new ProdutoService();
    }

    async create(request: Request, response: Response){
        const { nome, descricao } = request.body;
        
        const result = await this.service.create({ nome, descricao });

        response.json(result);
    }

    async read(request: Request, response: Response){
        const { nome, descricao } = request.params;
        const produtos = await this.service.read({ nome, descricao });

        response.json(produtos);
    }

    async readById(request: Request, response: Response){
        const { id } = request.params;
        const produto = await this.service.readById(id);

        response.json(produto);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { nome, descricao } = request.body;

        const produto = await this.service.update(id, { nome, descricao });
        response.json(produto);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        
        await this.service.delete(id);
        response.status(200).json({message: 'Produto excluído com sucesso!'});
    }
}