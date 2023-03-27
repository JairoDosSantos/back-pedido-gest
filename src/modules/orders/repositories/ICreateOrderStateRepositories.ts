
import { OrderState } from '../model/OrderState.model';

interface ICreateOrederStateDTO {
    state: string
}

interface ICreateOrderStateRepository {
    create({ state }: ICreateOrederStateDTO): void;
    list(): OrderState[];
    findByName(name: string): OrderState | null

}

export { ICreateOrderStateRepository };

