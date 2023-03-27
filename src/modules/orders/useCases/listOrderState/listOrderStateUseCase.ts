import { OrderState } from "../../model/OrderState.model";
import { OrderStateRepository } from "../../repositories/implementations/orderStateRepositories";



class ListOrderStateUseCase {


    constructor(private orderStateRepository: OrderStateRepository) { }

    execute(): OrderState[] {

        return this.orderStateRepository.list()

    }
}

export { ListOrderStateUseCase };

