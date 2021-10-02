import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly products?: (Product | null)[];
  readonly trash?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly image: string;
  readonly images: string[];
  readonly sizes: (string | null)[];
  readonly colors: (string | null)[];
  readonly weights: (number | null)[];
  readonly model: (string | null)[];
  readonly avgRating: number;
  readonly ratings?: number;
  readonly price: number;
  readonly oldPrice?: number;
  readonly categoryID?: string;
  readonly category?: Category;
  readonly comments?: (Comment | null)[];
  readonly trash?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Comment {
  readonly id: string;
  readonly userSub: string;
  readonly title: string;
  readonly conetent: string;
  readonly productID?: string;
  readonly product?: Product;
  readonly trash?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Address {
  readonly id: string;
  readonly userSub: string;
  readonly addressText: string;
  readonly city: string;
  readonly label: string;
  readonly trash?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub: string;
  readonly selectedQuantity: number;
  readonly selectedSize?: string;
  readonly selectedColor?: string;
  readonly selectedWeight?: number;
  readonly productID: string;
  readonly product?: Product;
  readonly cartID?: string;
  readonly cart?: Cart;
  readonly trash?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CartProduct, CartProductMetaData>);
  static copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct, CartProductMetaData>) => MutableModel<CartProduct, CartProductMetaData> | void): CartProduct;
}

export declare class Cart {
  readonly id: string;
  readonly userSub: string;
  readonly cartProducts?: (CartProduct | null)[];
  readonly trash?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class Order {
  readonly id: string;
  readonly userSub: string;
  readonly deliveryNotes?: string;
  readonly totalPrice: number;
  readonly paymentMethod: string;
  readonly cartID: string;
  readonly cart?: Cart;
  readonly addressID: string;
  readonly address?: Address;
  readonly trash?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}