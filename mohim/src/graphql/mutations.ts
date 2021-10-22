/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      description
      image
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          title
          description
          image
          images
          sizes
          colors
          weights
          model
          avgRating
          ratings
          price
          oldPrice
          categoryID
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      description
      image
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          title
          description
          image
          images
          sizes
          colors
          weights
          model
          avgRating
          ratings
          price
          oldPrice
          categoryID
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      description
      image
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          title
          description
          image
          images
          sizes
          colors
          weights
          model
          avgRating
          ratings
          price
          oldPrice
          categoryID
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      sizes
      colors
      weights
      model
      avgRating
      ratings
      price
      oldPrice
      categoryID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
        description
        image
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      comments {
        items {
          id
          userSub
          title
          conetent
          productID
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      sizes
      colors
      weights
      model
      avgRating
      ratings
      price
      oldPrice
      categoryID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
        description
        image
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      comments {
        items {
          id
          userSub
          title
          conetent
          productID
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      sizes
      colors
      weights
      model
      avgRating
      ratings
      price
      oldPrice
      categoryID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
        description
        image
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      comments {
        items {
          id
          userSub
          title
          conetent
          productID
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      userSub
      title
      conetent
      productID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        sizes
        colors
        weights
        model
        avgRating
        ratings
        price
        oldPrice
        categoryID
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
          description
          image
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      userSub
      title
      conetent
      productID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        sizes
        colors
        weights
        model
        avgRating
        ratings
        price
        oldPrice
        categoryID
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
          description
          image
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      userSub
      title
      conetent
      productID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        sizes
        colors
        weights
        model
        avgRating
        ratings
        price
        oldPrice
        categoryID
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
          description
          image
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      userSub
      addressText
      city
      label
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      userSub
      addressText
      city
      label
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      userSub
      addressText
      city
      label
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
      id
      userSub
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
      trash
      selectedModel
      purchased
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        sizes
        colors
        weights
        model
        avgRating
        ratings
        price
        oldPrice
        categoryID
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
          description
          image
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
      }
      cart {
        id
        userSub
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cartProducts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
      id
      userSub
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
      trash
      selectedModel
      purchased
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        sizes
        colors
        weights
        model
        avgRating
        ratings
        price
        oldPrice
        categoryID
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
          description
          image
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
      }
      cart {
        id
        userSub
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cartProducts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
      id
      userSub
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
      trash
      selectedModel
      purchased
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        sizes
        colors
        weights
        model
        avgRating
        ratings
        price
        oldPrice
        categoryID
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
          description
          image
          trash
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
          startedAt
        }
      }
      cart {
        id
        userSub
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cartProducts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      userSub
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cartProducts {
        items {
          id
          userSub
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          trash
          selectedModel
          purchased
          orderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      userSub
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cartProducts {
        items {
          id
          userSub
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          trash
          selectedModel
          purchased
          orderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      userSub
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cartProducts {
        items {
          id
          userSub
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          trash
          selectedModel
          purchased
          orderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userSub
      deliveryNotes
      totalPrice
      paymentMethod
      cartID
      addressID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        userSub
        addressText
        city
        label
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderCartProduct {
        items {
          id
          userSub
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          trash
          selectedModel
          purchased
          orderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      cart {
        id
        userSub
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cartProducts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userSub
      deliveryNotes
      totalPrice
      paymentMethod
      cartID
      addressID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        userSub
        addressText
        city
        label
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderCartProduct {
        items {
          id
          userSub
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          trash
          selectedModel
          purchased
          orderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      cart {
        id
        userSub
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cartProducts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userSub
      deliveryNotes
      totalPrice
      paymentMethod
      cartID
      addressID
      trash
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      address {
        id
        userSub
        addressText
        city
        label
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderCartProduct {
        items {
          id
          userSub
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          trash
          selectedModel
          purchased
          orderID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      cart {
        id
        userSub
        trash
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cartProducts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
