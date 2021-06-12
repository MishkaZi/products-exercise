
export const productsReducer = (oldState: any = [], action: any) => {
  const newState = { ...oldState };
  switch (action.type) {
    case 'GET_PRODUCTS':
      newState.products = action.payload;
      return newState;
    case 'ACTIVATE_ALL':
      newState.products = action.payload;
      return newState;
    case 'ACTIVATE_PRODUCT':
      newState.products = action.payload;
      return newState;
    default:
      return newState;
  }
};
