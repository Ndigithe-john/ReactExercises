import {
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "../constants/productsConstants";

const initialState = {
  loading: true,
  products: [],
  error: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
