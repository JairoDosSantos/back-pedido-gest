import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
const orderStateRoutes = Router();

interface IOrderType {
    id?: string;
    state: string
}

let orderStates: IOrderType[] = []

orderStateRoutes.post("/orderState", (request, response) => {

    const { state } = request.body

    orderStates.push({
        id: uuidV4(),
        state
    })

    return response.status(201).send()
})

orderStateRoutes.get("/orderState", (request, response) => {

    response.status(200).json(orderStates)
})
export { orderStateRoutes };

