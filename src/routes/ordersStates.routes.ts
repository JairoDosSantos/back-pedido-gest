import { Router } from 'express';
import { OrderStateRepository } from '../repositories/orderStateRepositories';
const orderStateRoutes = Router();

interface IOrderType {
    id?: string;
    state: string
}

let orderStates: IOrderType[] = []
const orderStateRepository = new OrderStateRepository()
orderStateRoutes.post("/orderState", (request, response) => {

    const { state } = request.body

    orderStateRepository.create({ state })

    return response.status(201).send()
})

orderStateRoutes.get("/orderState", (request, response) => {

    response.status(200).json(orderStates)
})


export { orderStateRoutes };

