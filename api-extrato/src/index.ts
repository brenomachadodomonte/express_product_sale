import express from 'express';
import { routes } from './extrato/extrato.routes'

function main() {
    const app = express();
    const port: number = 3001;

    app.use(express.json());
    app.use(routes);

    app.listen(port, () => console.log('[ APP ]', `Application is running on port ${port}`));
}

main();