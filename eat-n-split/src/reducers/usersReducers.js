import { ADD_FRIEND } from "../constants/usersConstants";

const initialState = {
  friends: [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=49947",
      balance: 0,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default usersReducer;
