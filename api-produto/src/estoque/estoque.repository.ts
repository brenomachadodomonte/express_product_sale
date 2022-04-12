import { PrismaClient } from "@prisma/client";
import { FilterProdutoDto } from "../produto/dto/filter-produto.dto";
import { CreateEstoqueDto } from "./dto/create-estoque.dto";
import { UpdateEstoqueDto } from "./dto/update-estoque.dto";


export class EstoqueRepository {

    prisma = new PrismaClient();

    async create(createDto: CreateEstoqueDto){
        const { produtoId, quantidade } = createDto;
        const estoque = await this.prisma.estoque.create({
            data: {
                produtoId,
                quantidade
            }
        });

        return estoque;
    }


    async read(filterDto: FilterProdutoDto) {
        const { nome, descricao, valor } = filterDto;
        const estoques = await this.prisma.estoque.findMany();

        return estoques;
    }

    async readById(id: string) {
        const estoque = await this.prisma.estoque.findUnique({
            where: {
                id
            }
        });

        return estoque;
    }

    async update(id: string, updateDto: UpdateEstoqueDto) {
        const { quantidade } = updateDto;
        const estoque = await this.prisma.estoque.update({
            where: {
                id
            },
            data: {
                quantidade
            }
        });

        return estoque;
    }

    async delete(id: string) {
        await this.prisma.estoque.delete({
            where: {
                id
            }
        });
    } 

    async countEstoque(produtoId: string): Promise<number | null> {
        const aggregate = await this.prisma.estoque.aggregate({
            where: {
                produtoId: produtoId
            },
            _sum: {
                quantidade: true
            }
        });

        return aggregate._sum.quantidade;
    }

}