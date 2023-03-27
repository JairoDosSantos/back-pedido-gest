import { OrderStateRepository } from "../../repositories/implementations/orderStateRepositories";

interface Irequest {
    state: string
}

class CreateOrderUseCase {
    constructor(private orderStateRepository: OrderStateRepository) { }

    execute({ state }: Irequest): void {

        const orderStateAlreadyExists = this.orderStateRepository.findByName(state);

        if (orderStateAlreadyExists) {

            throw new Error("Order State already exists");
        }

        this.orderStateRepository.create({ state })
    }
}

export { CreateOrderUseCase };

