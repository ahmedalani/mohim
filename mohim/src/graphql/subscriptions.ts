/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
      id
      userSub
      lable
      addressText
      city
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      id
      userSub
      lable
      addressText
      city
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      id
      userSub
      lable
      addressText
      city
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
      cart {
        id
        userSub
        cartProducts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
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
        avgRating
        ratings
        price
        oldPrice
        categoryID
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
      cart {
        id
        userSub
        cartProducts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
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
        avgRating
        ratings
        price
        oldPrice
        categoryID
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
      cart {
        id
        userSub
        cartProducts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
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
        avgRating
        ratings
        price
        oldPrice
        categoryID
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
      id
      userSub
      cartProducts {
        items {
          id
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
      id
      userSub
      cartProducts {
        items {
          id
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
      id
      userSub
      cartProducts {
        items {
          id
          selectedQuantity
          selectedSize
          selectedColor
          selectedWeight
          productID
          cartID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userSub
      deliveryNotes
      totalPrice
      paymentMethod
      cartID
      cart {
        id
        userSub
        cartProducts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      addressID
      address {
        id
        userSub
        lable
        addressText
        city
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userSub
      deliveryNotes
      totalPrice
      paymentMethod
      cartID
      cart {
        id
        userSub
        cartProducts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      addressID
      address {
        id
        userSub
        lable
        addressText
        city
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userSub
      deliveryNotes
      totalPrice
      paymentMethod
      cartID
      cart {
        id
        userSub
        cartProducts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      addressID
      address {
        id
        userSub
        lable
        addressText
        city
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor {
    onCreateVendor {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor {
    onUpdateVendor {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor {
    onDeleteVendor {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      title
      description
      image
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
          avgRating
          ratings
          price
          oldPrice
          categoryID
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      title
      description
      image
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
          avgRating
          ratings
          price
          oldPrice
          categoryID
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      title
      description
      image
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
          avgRating
          ratings
          price
          oldPrice
          categoryID
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      title
      description
      image
      images
      sizes
      colors
      weights
      avgRating
      ratings
      price
      oldPrice
      categoryID
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      title
      description
      image
      images
      sizes
      colors
      weights
      avgRating
      ratings
      price
      oldPrice
      categoryID
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      title
      description
      image
      images
      sizes
      colors
      weights
      avgRating
      ratings
      price
      oldPrice
      categoryID
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      userSub
      title
      conetent
      productID
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
        avgRating
        ratings
        price
        oldPrice
        categoryID
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
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      userSub
      title
      conetent
      productID
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
        avgRating
        ratings
        price
        oldPrice
        categoryID
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
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      userSub
      title
      conetent
      productID
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
        avgRating
        ratings
        price
        oldPrice
        categoryID
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
      owner
    }
  }
`;
