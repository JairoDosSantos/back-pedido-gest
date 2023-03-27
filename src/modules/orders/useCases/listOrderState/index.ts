import { OrderStateRepository } from "../../repositories/implementations/orderStateRepositories";
import { ListOrderStateController } from "./listOrderStateController";
import { ListOrderStateUseCase } from "./listOrderStateUseCase";


const orderStateRepository = OrderStateRepository.getInstance()
const listOrderStateUseCase = new ListOrderStateUseCase(orderStateRepository);
const listOrderStateController = new ListOrderStateController(listOrderStateUseCase)

export { listOrderStateController };

