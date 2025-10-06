import Order from '../models/OrderModel.mjs';
import { IOrder } from '../interfaces/IOrder.js';

export default class OrderRepository {
  async listAll(): Promise<IOrder[]> {
    return await Order.find();
  }

  async findByGivenName(givenName: string): Promise<IOrder | null> {
    return await Order.findOne({ givenName: givenName });
  }

  async findById(id: string): Promise<IOrder | null> {
    return await Order.findById(id);
  }

  async add(order: Partial<IOrder>): Promise<IOrder> {
    return await Order.create(order);
  }

  async update(
    id: string,
    updatedOrder: Partial<IOrder>
  ): Promise<IOrder | null> {
    return await Order.findByIdAndUpdate(id, updatedOrder, {
      new: true,
      runValidators: true,
    });
  }

  async remove(id: string): Promise<{ deletedCount?: number }> {
    return await Order.deleteOne({ _id: id });
  }
}
