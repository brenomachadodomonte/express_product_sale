import { Prisma } from "@prisma/client";
import { FilterProdutoDto } from "../produto/dto/filter-produto.dto";
import { ProdutoRepository } from "../produto/produto.repository";
import { CreateEstoqueDto } from "./dto/create-estoque.dto";
import { UpdateEstoqueDto } from "./dto/update-estoque.dto";
import { EstoqueRepository } from "./estoque.repository";


export class EstoqueService {

    repository: EstoqueRepository;
    produtoRepository: ProdutoRepository;

    constructor(){
        this.repository = new EstoqueRepository()
        this.produtoRepository = new ProdutoRepository();
    }

    async create(createDto: CreateEstoqueDto) {
        const produto = await this.produtoRepository.readById(createDto.produtoId);
        if(!produto){
            return new Error('Produto não encontrado');
        }
        return this.repository.create(createDto);
    }

    async read(filterDto: FilterProdutoDto) {
       return this.repository.read(filterDto);
    }

    async readById(id: string) {
        return this.repository.readById(id);
    }

    async update(id: string, updateDto: UpdateEstoqueDto) {
        return this.repository.update(id, updateDto);
    }

    async delete(id: string) {
        return this.repository.delete(id);
    }

}