import { Prisma } from "@prisma/client";
import { FilterProdutoDto } from "./dto/filter-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";
import { ProdutoRepository } from "./produto.repository";


export class ProdutoService {

    repository: ProdutoRepository;

    constructor(){
        this.repository = new ProdutoRepository()
    }

    async create(createInput: Prisma.ProdutoCreateInput) {
        return this.repository.create(createInput);
    }

    async read(filterDto: FilterProdutoDto) {
       return this.repository.read(filterDto);
    }

    async readById(id: string) {
        return this.repository.readById(id);
    }

    async update(id: string, updateDto: UpdateProdutoDto) {
        return this.repository.update(id, updateDto);
    }

    async delete(id: string) {
        return this.repository.delete(id);
    }
    
}