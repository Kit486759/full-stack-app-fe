import { createStore } from "redux";

const initState = {
  isLogin: false,
  token: "",
  posts: [],
};

const authReducer = (state = initState, action) => {
  if (action.type === "login") {
    return (state = {
      ...state,
      isLogin: true,
      token: action.payload,
     
    });
  }
  if (action.type === "allposts") {
    return (state = {
      ...state,
      posts: action.payload,
    });
  }
  return state;
};

const store = createStore(authReducer);

export default store;
