import express from 'express';
import { routes as produtoRoutes } from './produto/produto.routes';

function main() {
    const app = express();
    const port: number = 3000;

    app.use(express.json());

    app.use(produtoRoutes);

    app.listen(port, () => console.log('[ APP ]', `Application is running on port ${port}`));
}

main();