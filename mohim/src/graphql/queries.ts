/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
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
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
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
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
