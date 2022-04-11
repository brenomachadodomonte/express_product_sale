import { PrismaClient } from "@prisma/client";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { FilterProdutoDto } from "./dto/filter-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";


export class ProdutoRepository {
    
    prisma = new PrismaClient();

    async create(createDto: CreateProdutoDto){
        const { nome, descricao } = createDto;

        const produto = await this.prisma.produto.create({
            data: {
                nome,
                descricao
            }
        });

        return produto;
    }

    async read(filterDto: FilterProdutoDto) {
        const { nome, descricao } = filterDto;
        const produtos = await this.prisma.produto.findMany();

        return produtos;
    }

    async readById(id: string) {
        const produto = await this.prisma.produto.findUnique({
            where: {
                id
            }
        });

        return produto;
    }

    async update(id: string, updateDto: UpdateProdutoDto) {
        const { nome, descricao } = updateDto;
        const produto = await this.prisma.produto.update({
            where: {
                id
            },
            data: {
                nome,
                descricao
            }
        });

        return produto;
    }

    async delete(id: string) {
        await this.prisma.produto.delete({
            where: {
                id
            }
        });
    } 
}