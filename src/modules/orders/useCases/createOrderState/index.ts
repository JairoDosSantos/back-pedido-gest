import { OrderStateRepository } from "../../repositories/implementations/orderStateRepositories"
import { CreateOrderStateController } from "./CreateOrderStateController"
import { CreateOrderUseCase } from "./CreateOrdersUseCase"


const orderStateRepository = OrderStateRepository.getInstance()
const orderStateUseCase = new CreateOrderUseCase(orderStateRepository)
const orderStateController = new CreateOrderStateController(orderStateUseCase)


export { orderStateController }

