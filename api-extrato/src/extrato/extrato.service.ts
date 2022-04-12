import { CreateExtratoDto } from "./dto/create-extrato.dto";
import { ExtratoRepository } from "./extrato.repository";


export class ExtratoService {

    private repository: ExtratoRepository;

    constructor(){
        this.repository = new ExtratoRepository();
    }

    async create(createDto: CreateExtratoDto) {
        return this.repository.create(createDto);
    }

    async read() {
        return this.repository.read();
    }
}