export const getALLProducts = (products: any) => {
  return {
    type: 'GET_PRODUCTS',
    payload: products,
  };
};

export const activateAll = (products: any) => {
  const activatedProducts = products.filter(
    (product: any) => (product.available = true)
  );
  return {
    type: 'ACTIVATE_ALL',
    payload: activatedProducts,
  };
};

export const activateByName = (products: any, name: String) => {
    console.log(products);
    
  const activatedProducts = products.forEach((product: any) => {
    if (product.name === name) {
      product.available = true;
    }
  });
  return {
    type: 'ACTIVATE_PRODUCT',
    payload: activatedProducts,
  };
};
