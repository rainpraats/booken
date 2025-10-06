import { Document } from 'mongoose';

export interface IOrder extends Document {
  givenName: string;
  familyName: string;
  email: string;
  phoneNumber: string;
  streetAdress: string;
  locality: string;
  postalCode: string;
  careOf?: string;
  paymentMethod: 'banktransfer' | 'swish';
  quantity: number;
}
