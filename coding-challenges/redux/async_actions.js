const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

//Constants
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SECCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

// state
const initialState = {
  loading: false,
  products: [],
  error: false,
};

// ACTIONS
function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchSuccess(products) {
  return { type: FETCH_SECCESS, payload: products };
}

function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

//Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SECCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    }
    case FETCH_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

const store = createStore(reducer);
