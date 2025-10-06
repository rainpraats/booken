import OrderRepository from '../repositories/orderRepository.mjs';
import { catchErrorAsync } from '../utilities/catchErrorAsync.mjs';

export const listAllOrders = catchErrorAsync(async (req, res) => {
  const orders = await new OrderRepository().listAll();
  res.status(200).json({ success: true, data: orders });
});

export const findOrderByGivenName = catchErrorAsync(async (req, res) => {
  const order = await new OrderRepository().findByGivenName(
    req.params.givenName
  );
  res.status(200).json({ success: true, data: order });
});

export const findOrderById = catchErrorAsync(async (req, res) => {
  const order = await new OrderRepository().findById(req.params.orderId);
  res.status(200).json({ success: true, data: order });
});

export const addOrder = catchErrorAsync(async (req, res) => {
  const order = new OrderRepository().add(req.body);
  res.status(201).json({ success: true, data: order });
});

export const updateOrder = catchErrorAsync(async (req, res) => {
  console.log(req.body);
  console.log(req.params.orderId);

  const order = new OrderRepository().update(req.params.orderId, req.body);
  res.status(201).json({ success: true, data: order });
});

export const removeOrder = catchErrorAsync(async (req, res) => {
  new OrderRepository().remove(req.params.orderId);
  res.status(204).send();
});
