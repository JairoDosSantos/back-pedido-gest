import { Router } from 'express';

import { orderStateController } from '../modules/orders/useCases/createOrderState';
import { listOrderStateController } from '../modules/orders/useCases/listOrderState';


const orderStateRoutes = Router();


orderStateRoutes.post("/", (request, response) => {


    return orderStateController.handle(request, response)
})

orderStateRoutes.get("/", (request, response) => {

    return listOrderStateController.handle(request, response)

})


export { orderStateRoutes };

