export const addItemToCart = (cartItems, product) => {
  const alreadyInCart = cartItems.find((item) => {
    return item.id === product.id;
  });
  if (alreadyInCart) {
    return cartItems.map((item) => {
      return item.id === alreadyInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

export const removeItem = (cartItems, id) => {
  const productToRemove = cartItems.find((item) => {
    return item.id === id;
  });
  if (productToRemove.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
  return cartItems.filter((item) => {
    return item.id !== productToRemove.id;
  });
};
