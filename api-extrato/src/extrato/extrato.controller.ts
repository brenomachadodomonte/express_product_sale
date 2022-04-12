import { Request, Response } from "express";


export class ExtratoController {

    async create(request: Request, response: Response) {


        response.json({ message: 'chegou aqui hein' });
    }

}