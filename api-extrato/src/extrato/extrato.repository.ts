import { CreateExtratoDto } from "./dto/create-extrato.dto";
import { PrismaClient } from "@prisma/client";

export class ExtratoRepository {

    prisma = new PrismaClient();

    async create(createDto: CreateExtratoDto) {
        const extrato = await this.prisma.extrato.create({
            data: createDto
        });
        
        return extrato;
    }

}