import { v4 as uuidV4 } from 'uuid';


class OrderState {

    id?: string;
    state: string;

    constructor() {

        if (!this.id) {

            this.id = uuidV4();

        }

    }
}

export { OrderState };

