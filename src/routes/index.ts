import { Router } from 'express';
import { orderStateRoutes } from './ordersStates.routes';

const router = Router();


router.use("/orderState", orderStateRoutes)

export { router };
