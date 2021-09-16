/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  description: string,
  image: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  description: string,
  image: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  products?: ModelProductConnection | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  description?: string | null,
  image: string,
  images: Array< string | null >,
  sizes?: Array< string | null > | null,
  colors?: Array< string | null > | null,
  weights?: Array< number | null > | null,
  avgRating: number,
  ratings?: number | null,
  price: number,
  oldPrice?: number | null,
  categoryID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  category?: Category | null,
  comments?: ModelCommentConnection | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  userSub: string,
  title: string,
  conetent: string,
  productID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  product?: Product | null,
  owner?: string | null,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image: string,
  images: Array< string | null >,
  sizes?: Array< string | null > | null,
  colors?: Array< string | null > | null,
  weights?: Array< number | null > | null,
  avgRating: number,
  ratings?: number | null,
  price: number,
  oldPrice?: number | null,
  categoryID: string,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  sizes?: ModelStringInput | null,
  colors?: ModelStringInput | null,
  weights?: ModelFloatInput | null,
  avgRating?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  images?: Array< string | null > | null,
  sizes?: Array< string | null > | null,
  colors?: Array< string | null > | null,
  weights?: Array< number | null > | null,
  avgRating?: number | null,
  ratings?: number | null,
  price?: number | null,
  oldPrice?: number | null,
  categoryID?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCommentInput = {
  id?: string | null,
  userSub: string,
  title: string,
  conetent: string,
  productID: string,
  _version?: number | null,
};

export type ModelCommentConditionInput = {
  userSub?: ModelStringInput | null,
  title?: ModelStringInput | null,
  conetent?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  userSub?: string | null,
  title?: string | null,
  conetent?: string | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteCommentInput = {
  id: string,
  _version?: number | null,
};

export type CreateAddressInput = {
  id?: string | null,
  userSub: string,
  lable: string,
  addressText: string,
  city: string,
  _version?: number | null,
};

export type ModelAddressConditionInput = {
  userSub?: ModelStringInput | null,
  lable?: ModelStringInput | null,
  addressText?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  userSub: string,
  lable: string,
  addressText: string,
  city: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAddressInput = {
  id: string,
  userSub?: string | null,
  lable?: string | null,
  addressText?: string | null,
  city?: string | null,
  _version?: number | null,
};

export type DeleteAddressInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartProductInput = {
  id?: string | null,
  selectedQuantity: number,
  selectedSize?: string | null,
  selectedColor?: string | null,
  selectedWeight?: number | null,
  productID: string,
  cartID: string,
  _version?: number | null,
};

export type ModelCartProductConditionInput = {
  selectedQuantity?: ModelIntInput | null,
  selectedSize?: ModelStringInput | null,
  selectedColor?: ModelStringInput | null,
  selectedWeight?: ModelFloatInput | null,
  productID?: ModelIDInput | null,
  cartID?: ModelIDInput | null,
  and?: Array< ModelCartProductConditionInput | null > | null,
  or?: Array< ModelCartProductConditionInput | null > | null,
  not?: ModelCartProductConditionInput | null,
};

export type CartProduct = {
  __typename: "CartProduct",
  id: string,
  selectedQuantity: number,
  selectedSize?: string | null,
  selectedColor?: string | null,
  selectedWeight?: number | null,
  productID: string,
  cartID: string,
  cart?: Cart | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  product?: Product | null,
};

export type Cart = {
  __typename: "Cart",
  id: string,
  userSub: string,
  cartProducts?: ModelCartProductConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelCartProductConnection = {
  __typename: "ModelCartProductConnection",
  items?:  Array<CartProduct | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCartProductInput = {
  id: string,
  selectedQuantity?: number | null,
  selectedSize?: string | null,
  selectedColor?: string | null,
  selectedWeight?: number | null,
  productID?: string | null,
  cartID?: string | null,
  _version?: number | null,
};

export type DeleteCartProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartInput = {
  id?: string | null,
  userSub: string,
  _version?: number | null,
};

export type ModelCartConditionInput = {
  userSub?: ModelStringInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
};

export type UpdateCartInput = {
  id: string,
  userSub?: string | null,
  _version?: number | null,
};

export type DeleteCartInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  userSub: string,
  deliveryNotes?: string | null,
  totalPrice: number,
  paymentMethod: string,
  cartID: string,
  addressID: string,
  _version?: number | null,
};

export type ModelOrderConditionInput = {
  userSub?: ModelStringInput | null,
  deliveryNotes?: ModelStringInput | null,
  totalPrice?: ModelFloatInput | null,
  paymentMethod?: ModelStringInput | null,
  cartID?: ModelIDInput | null,
  addressID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  userSub: string,
  deliveryNotes?: string | null,
  totalPrice: number,
  paymentMethod: string,
  cartID: string,
  cart?: Cart | null,
  addressID: string,
  address?: Address | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderInput = {
  id: string,
  userSub?: string | null,
  deliveryNotes?: string | null,
  totalPrice?: number | null,
  paymentMethod?: string | null,
  cartID?: string | null,
  addressID?: string | null,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateVendorInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelVendorConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
};

export type Vendor = {
  __typename: "Vendor",
  id: string,
  name: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVendorInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteVendorInput = {
  id: string,
  _version?: number | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  lable?: ModelStringInput | null,
  addressText?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items?:  Array<Address | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCartProductFilterInput = {
  id?: ModelIDInput | null,
  selectedQuantity?: ModelIntInput | null,
  selectedSize?: ModelStringInput | null,
  selectedColor?: ModelStringInput | null,
  selectedWeight?: ModelFloatInput | null,
  productID?: ModelIDInput | null,
  cartID?: ModelIDInput | null,
  and?: Array< ModelCartProductFilterInput | null > | null,
  or?: Array< ModelCartProductFilterInput | null > | null,
  not?: ModelCartProductFilterInput | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items?:  Array<Cart | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  deliveryNotes?: ModelStringInput | null,
  totalPrice?: ModelFloatInput | null,
  paymentMethod?: ModelStringInput | null,
  cartID?: ModelIDInput | null,
  addressID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
};

export type ModelVendorConnection = {
  __typename: "ModelVendorConnection",
  items?:  Array<Vendor | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  sizes?: ModelStringInput | null,
  colors?: ModelStringInput | null,
  weights?: ModelFloatInput | null,
  avgRating?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  title?: ModelStringInput | null,
  conetent?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description: string,
    image: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    products?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description: string,
    image: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    products?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description: string,
    image: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    products?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string | null >,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    weights?: Array< number | null > | null,
    avgRating: number,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    categoryID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userSub: string,
        title: string,
        conetent: string,
        productID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string | null >,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    weights?: Array< number | null > | null,
    avgRating: number,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    categoryID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userSub: string,
        title: string,
        conetent: string,
        productID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string | null >,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    weights?: Array< number | null > | null,
    avgRating: number,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    categoryID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userSub: string,
        title: string,
        conetent: string,
        productID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    userSub: string,
    title: string,
    conetent: string,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    userSub: string,
    title: string,
    conetent: string,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    userSub: string,
    title: string,
    conetent: string,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    userSub: string,
    lable: string,
    addressText: string,
    city: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    userSub: string,
    lable: string,
    addressText: string,
    city: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    userSub: string,
    lable: string,
    addressText: string,
    city: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartProductMutationVariables = {
  input: CreateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type CreateCartProductMutation = {
  createCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    selectedQuantity: number,
    selectedSize?: string | null,
    selectedColor?: string | null,
    selectedWeight?: number | null,
    productID: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateCartProductMutationVariables = {
  input: UpdateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type UpdateCartProductMutation = {
  updateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    selectedQuantity: number,
    selectedSize?: string | null,
    selectedColor?: string | null,
    selectedWeight?: number | null,
    productID: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteCartProductMutationVariables = {
  input: DeleteCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type DeleteCartProductMutation = {
  deleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    selectedQuantity: number,
    selectedSize?: string | null,
    selectedColor?: string | null,
    selectedWeight?: number | null,
    productID: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    userSub: string,
    cartProducts?:  {
      __typename: "ModelCartProductConnection",
      items?:  Array< {
        __typename: "CartProduct",
        id: string,
        selectedQuantity: number,
        selectedSize?: string | null,
        selectedColor?: string | null,
        selectedWeight?: number | null,
        productID: string,
        cartID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    userSub: string,
    cartProducts?:  {
      __typename: "ModelCartProductConnection",
      items?:  Array< {
        __typename: "CartProduct",
        id: string,
        selectedQuantity: number,
        selectedSize?: string | null,
        selectedColor?: string | null,
        selectedWeight?: number | null,
        productID: string,
        cartID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    userSub: string,
    cartProducts?:  {
      __typename: "ModelCartProductConnection",
      items?:  Array< {
        __typename: "CartProduct",
        id: string,
        selectedQuantity: number,
        selectedSize?: string | null,
        selectedColor?: string | null,
        selectedWeight?: number | null,
        productID: string,
        cartID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    deliveryNotes?: string | null,
    totalPrice: number,
    paymentMethod: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    deliveryNotes?: string | null,
    totalPrice: number,
    paymentMethod: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    deliveryNotes?: string | null,
    totalPrice: number,
    paymentMethod: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVendorMutationVariables = {
  input: CreateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type CreateVendorMutation = {
  createVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVendorMutationVariables = {
  input: UpdateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type UpdateVendorMutation = {
  updateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVendorMutationVariables = {
  input: DeleteVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type DeleteVendorMutation = {
  deleteVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAddressesQuery = {
  syncAddresses?:  {
    __typename: "ModelAddressConnection",
    items?:  Array< {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    userSub: string,
    lable: string,
    addressText: string,
    city: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items?:  Array< {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartProductsQuery = {
  syncCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items?:  Array< {
      __typename: "CartProduct",
      id: string,
      selectedQuantity: number,
      selectedSize?: string | null,
      selectedColor?: string | null,
      selectedWeight?: number | null,
      productID: string,
      cartID: string,
      cart?:  {
        __typename: "Cart",
        id: string,
        userSub: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartProductQueryVariables = {
  id: string,
};

export type GetCartProductQuery = {
  getCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    selectedQuantity: number,
    selectedSize?: string | null,
    selectedColor?: string | null,
    selectedWeight?: number | null,
    productID: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type ListCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartProductsQuery = {
  listCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items?:  Array< {
      __typename: "CartProduct",
      id: string,
      selectedQuantity: number,
      selectedSize?: string | null,
      selectedColor?: string | null,
      selectedWeight?: number | null,
      productID: string,
      cartID: string,
      cart?:  {
        __typename: "Cart",
        id: string,
        userSub: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartsQuery = {
  syncCarts?:  {
    __typename: "ModelCartConnection",
    items?:  Array< {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    userSub: string,
    cartProducts?:  {
      __typename: "ModelCartProductConnection",
      items?:  Array< {
        __typename: "CartProduct",
        id: string,
        selectedQuantity: number,
        selectedSize?: string | null,
        selectedColor?: string | null,
        selectedWeight?: number | null,
        productID: string,
        cartID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items?:  Array< {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      deliveryNotes?: string | null,
      totalPrice: number,
      paymentMethod: string,
      cartID: string,
      cart?:  {
        __typename: "Cart",
        id: string,
        userSub: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        userSub: string,
        lable: string,
        addressText: string,
        city: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    deliveryNotes?: string | null,
    totalPrice: number,
    paymentMethod: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      deliveryNotes?: string | null,
      totalPrice: number,
      paymentMethod: string,
      cartID: string,
      cart?:  {
        __typename: "Cart",
        id: string,
        userSub: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      addressID: string,
      address?:  {
        __typename: "Address",
        id: string,
        userSub: string,
        lable: string,
        addressText: string,
        city: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVendorQueryVariables = {
  id: string,
};

export type GetVendorQuery = {
  getVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorsQuery = {
  listVendors?:  {
    __typename: "ModelVendorConnection",
    items?:  Array< {
      __typename: "Vendor",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVendorsQuery = {
  syncVendors?:  {
    __typename: "ModelVendorConnection",
    items?:  Array< {
      __typename: "Vendor",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description: string,
    image: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    products?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string | null >,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    weights?: Array< number | null > | null,
    avgRating: number,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    categoryID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userSub: string,
        title: string,
        conetent: string,
        productID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    userSub: string,
    title: string,
    conetent: string,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      userSub: string,
      title: string,
      conetent: string,
      productID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      userSub: string,
      title: string,
      conetent: string,
      productID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    userSub: string,
    lable: string,
    addressText: string,
    city: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    userSub: string,
    lable: string,
    addressText: string,
    city: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    userSub: string,
    lable: string,
    addressText: string,
    city: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCartProductSubscription = {
  onCreateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    selectedQuantity: number,
    selectedSize?: string | null,
    selectedColor?: string | null,
    selectedWeight?: number | null,
    productID: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateCartProductSubscription = {
  onUpdateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    selectedQuantity: number,
    selectedSize?: string | null,
    selectedColor?: string | null,
    selectedWeight?: number | null,
    productID: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteCartProductSubscription = {
  onDeleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    selectedQuantity: number,
    selectedSize?: string | null,
    selectedColor?: string | null,
    selectedWeight?: number | null,
    productID: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    userSub: string,
    cartProducts?:  {
      __typename: "ModelCartProductConnection",
      items?:  Array< {
        __typename: "CartProduct",
        id: string,
        selectedQuantity: number,
        selectedSize?: string | null,
        selectedColor?: string | null,
        selectedWeight?: number | null,
        productID: string,
        cartID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    userSub: string,
    cartProducts?:  {
      __typename: "ModelCartProductConnection",
      items?:  Array< {
        __typename: "CartProduct",
        id: string,
        selectedQuantity: number,
        selectedSize?: string | null,
        selectedColor?: string | null,
        selectedWeight?: number | null,
        productID: string,
        cartID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    userSub: string,
    cartProducts?:  {
      __typename: "ModelCartProductConnection",
      items?:  Array< {
        __typename: "CartProduct",
        id: string,
        selectedQuantity: number,
        selectedSize?: string | null,
        selectedColor?: string | null,
        selectedWeight?: number | null,
        productID: string,
        cartID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    deliveryNotes?: string | null,
    totalPrice: number,
    paymentMethod: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    deliveryNotes?: string | null,
    totalPrice: number,
    paymentMethod: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    deliveryNotes?: string | null,
    totalPrice: number,
    paymentMethod: string,
    cartID: string,
    cart?:  {
      __typename: "Cart",
      id: string,
      userSub: string,
      cartProducts?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    addressID: string,
    address?:  {
      __typename: "Address",
      id: string,
      userSub: string,
      lable: string,
      addressText: string,
      city: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor?:  {
    __typename: "Vendor",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description: string,
    image: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    products?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description: string,
    image: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    products?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description: string,
    image: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    products?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string | null >,
        sizes?: Array< string | null > | null,
        colors?: Array< string | null > | null,
        weights?: Array< number | null > | null,
        avgRating: number,
        ratings?: number | null,
        price: number,
        oldPrice?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string | null >,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    weights?: Array< number | null > | null,
    avgRating: number,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    categoryID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userSub: string,
        title: string,
        conetent: string,
        productID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string | null >,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    weights?: Array< number | null > | null,
    avgRating: number,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    categoryID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userSub: string,
        title: string,
        conetent: string,
        productID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string | null >,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    weights?: Array< number | null > | null,
    avgRating: number,
    ratings?: number | null,
    price: number,
    oldPrice?: number | null,
    categoryID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description: string,
      image: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userSub: string,
        title: string,
        conetent: string,
        productID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    userSub: string,
    title: string,
    conetent: string,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    userSub: string,
    title: string,
    conetent: string,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    userSub: string,
    title: string,
    conetent: string,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string | null >,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      weights?: Array< number | null > | null,
      avgRating: number,
      ratings?: number | null,
      price: number,
      oldPrice?: number | null,
      categoryID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description: string,
        image: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
