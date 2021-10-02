/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      userSub
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      userSub
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      userSub
      selectedQuantity
      selectedSize
      selectedColor
      selectedWeight
      productID
      cartID
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
