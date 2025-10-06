import mongoose from 'mongoose';
import { IOrder } from '../interfaces/IOrder.js';

const orderModel = new mongoose.Schema<IOrder>({
  givenName: {
    type: String,
    required: [true, 'First name is required'],
  },
  familyName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  streetAdress: {
    type: String,
    required: [true, 'Street address is required'],
  },
  locality: {
    type: String,
    required: [true, 'Locality is required'],
  },
  postalCode: {
    type: String,
    required: [true, 'Postal code is required'],
  },
  careOf: {
    type: String,
    default: '',
  },
  paymentMethod: {
    type: String,
    required: [true, 'Payment method is required'],
    enum: ['banktransfer', 'swish'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
  },
});

export default mongoose.model<IOrder>('Order', orderModel);
