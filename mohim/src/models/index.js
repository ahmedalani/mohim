// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Product, Comment, Address, CartProduct, Cart, Order } = initSchema(schema);

export {
  Category,
  Product,
  Comment,
  Address,
  CartProduct,
  Cart,
  Order
};