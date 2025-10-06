import express from 'express';
import { addOrder } from '../controllers/order-controller.mjs';

const orderRouter = express.Router();

orderRouter.route('/').post(addOrder);

export default orderRouter;
