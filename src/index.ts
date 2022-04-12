import express from 'express';
import { routes as produtoRoutes } from './produto/produto.routes';
import { routes as estoqueRoutes } from './estoque/estoque.routes';
import { routes as vendaRoutes } from './venda/venda.routes';

function main() {
    const app = express();
    const port: number = 3000;

    app.use(express.json());

    app.use(produtoRoutes);
    app.use(estoqueRoutes);
    app.use(vendaRoutes);

    app.listen(port, () => console.log('[ APP ]', `Application is running on port ${port}`));
}

main();