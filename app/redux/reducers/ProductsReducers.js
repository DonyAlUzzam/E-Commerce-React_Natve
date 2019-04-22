const initial = {
  products: [],
  carts: [],
  total: 0,
  isLoading: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_ALL_PRODUCTS_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        products: action.payload.data,
        isLoading: false
      };

    case "GET_PRODUCT_DETAIL_FULFILLED":
      return {
        ...state,
        products: action.payload.data,
        isLoading: false
      };
    case "GET_PRODUCTS_DETAIL_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_ALL_CART_FULFILLED":
      return {
        carts: action.payload.data.data,
        total: action.payload.data.total
      };
    case "INC_QTY_FULFILLED":
      const newIncCarts = state.carts.map(val => {
        if (val.id === action.payload.data.data.id) {
          return action.payload.data.data;
        } else {
          return val;
        }
      });

      return {
        carts: newIncCarts,
        total: action.payload.data.total
      };

    case "DEC_QTY_FULFILLED":
      const newDecCarts = state.carts.map(val => {
        if (val.id === action.payload.data.data.id) {
          return action.payload.data.data;
        } else {
          return val;
        }
      });
      return {
        carts: newDecCarts,
        total: action.payload.data.total
      };

    case "DELETE_ITEM_FULFILLED":
      const newData = state.carts.filter(val => {
        return val.id !== action.payload.data.data.id;
      });

      return {
        ...state,
        carts: newData,
        total: action.payload.data.total
        // carts: action.payload.data.data,
        // total: action.payload.data.total
      };

    default:
      return state;
  }
};
