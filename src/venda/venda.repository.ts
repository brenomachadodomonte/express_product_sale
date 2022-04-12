import { PrismaClient } from "@prisma/client";
import { CreateVendaDto } from "./dto/create-venda.dto";


export class VendaRepository {

    prisma = new PrismaClient();

    async create(createDto: CreateVendaDto) {
        const { produtoId, quantidade } = createDto;
        const estoque = await this.prisma.venda.create({
            data: {
                produtoId,
                quantidade
            }
        });

        return estoque;
    }


    async read() {
        const vendas = await this.prisma.venda.findMany();

        return vendas;
    }

    async countVendas(produtoId: string): Promise<number | null> {
        const aggregate = await this.prisma.venda.aggregate({
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