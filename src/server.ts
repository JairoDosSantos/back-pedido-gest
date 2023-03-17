import express from 'express';
import { orderStateRoutes } from './routes/ordersStates.routes';
const app = express();

app.use(express.json())
app.use(orderStateRoutes)

app.listen("3333", () => console.log("running..."))