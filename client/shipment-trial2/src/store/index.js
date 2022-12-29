import { legacy_createStore } from "redux";

const initialState = {
  authToken: localStorage.getItem("authToken") || null,
  user: null,
};

function authReducer(state = initialState, action) {
  console.log(state, action);

  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("authToken", action.payload?.authToken);
      return {
        authToken: action.payload?.authToken,
        user: action.payload?.user,
      };
    case "LOGOUT":
      localStorage.removeItem("authToken");
      return initialState;
    default:
      return state;
  }
}

const store = legacy_createStore(authReducer);

export default store;
//User (null by default)
//login state is maintained
