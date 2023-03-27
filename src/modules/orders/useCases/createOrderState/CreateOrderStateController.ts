import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrdersUseCase";


class CreateOrderStateController {

    constructor(private createOrderStateUseCase: CreateOrderUseCase) { }

    handle(request: Request, response: Response): Response {

        const { state } = request.body

        this.createOrderStateUseCase.execute({ state })

        return response.status(201).send()
    }
}

export { CreateOrderStateController };

