import { Request, Response } from "express";
import { ListOrderStateUseCase } from "./listOrderStateUseCase";



class ListOrderStateController {

    constructor(private listOrderStateUseCase: ListOrderStateUseCase) { }

    handle(request: Request, response: Response) {
        const all = this.listOrderStateUseCase.execute()

        return response.json(all)
    }
}

export { ListOrderStateController };

