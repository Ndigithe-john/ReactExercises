const FILL_UPDATE = "FILL_UPDATE";

const initialState = {
  type: "veggie",
  ingredients: {
    bread: "Whole grain",
    filling: "lettuce and tomato",
    sauce: "Mustard",
  },
};

const updateFill = (filling) => {
  return {
    type: FILL_UPDATE,
    payload: filling,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_UPDATE:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          filling: action.payload,
        },
      };
  }
};
