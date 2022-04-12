import { EstoqueRepository } from "../estoque/estoque.repository";
import { ProdutoRepository } from "../produto/produto.repository";
import { CreateVendaDto } from "./dto/create-venda.dto";
import { VendaRepository } from "./venda.repository";

export class VendaService {

    private repository: VendaRepository;
    private estoqueRepository: EstoqueRepository;
    private produtoRepository: ProdutoRepository;

    constructor(){
        this.repository = new VendaRepository();
        this.estoqueRepository = new EstoqueRepository();
        this.produtoRepository = new ProdutoRepository();
    }

    async create(createDto: CreateVendaDto) {
        const produto = await this.produtoRepository.readById(createDto.produtoId);
        if(!produto){
            return new Error('Produto não encontrado');
        }

        const quantidadeEstoque = await this.estoqueRepository.countEstoque(createDto.produtoId) ?? 0;
        const quantidadeVendas = await this.repository.countVendas(createDto.produtoId) ?? 0;

        if(quantidadeEstoque < (quantidadeVendas + createDto.quantidade)){
            return new Error('Não há estoque suficiente para realizar a compra!');
        }

        return this.repository.create(createDto);
    }

    async read() {
        return this.repository.read();
    }
}