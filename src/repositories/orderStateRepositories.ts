import { OrderState } from "../model/OrderState.model";

interface IOrderStateDTO {
    state: string
}

class OrderStateRepository {

    private ordersStates: OrderState[]

    constructor() {
        this.ordersStates = []
    }

    create({ state }: IOrderStateDTO): void {

        const orderState = new OrderState();

        Object.assign(orderState, { state })

        this.ordersStates.push(orderState);

    }

}

export { OrderStateRepository, IOrderStateDTO };

