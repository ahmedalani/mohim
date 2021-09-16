// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vendor, Category, Product, Comment, Address, CartProduct, Cart, Order } = initSchema(schema);

export {
  Vendor,
  Category,
  Product,
  Comment,
  Address,
  CartProduct,
  Cart,
  Order
};