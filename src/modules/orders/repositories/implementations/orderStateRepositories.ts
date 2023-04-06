import { OrderState } from "../../model/OrderState.model";
import { ICreateOrderStateRepository } from "../ICreateOrderStateRepositories";

interface IOrderStateDTO {
    state: string
}

class OrderStateRepository implements ICreateOrderStateRepository {

    private ordersStates: OrderState[]

    private static INSTANCE: OrderStateRepository

    private constructor() {

        this.ordersStates = []

    }

    public static getInstance(): OrderStateRepository {

        if (!OrderStateRepository.INSTANCE) {
            OrderStateRepository.INSTANCE = new OrderStateRepository()
        }

        return OrderStateRepository.INSTANCE
    }

    list(): OrderState[] {

        return this.ordersStates

    }

    findByName(name: string): OrderState | null {

        return this.ordersStates.find(orderState => orderState.state === name) || null;
    }

    create({ state }: IOrderStateDTO): void {

        const orderState = new OrderState();

        Object.assign(orderState, { state })

        this.ordersStates.push(orderState);
    }

}

export { OrderStateRepository, IOrderStateDTO };

