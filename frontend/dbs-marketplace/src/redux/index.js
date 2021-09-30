import { createStore } from "redux";

const userLoginReducer = (state = { isLoggedIn: false, username:null }, action) => {
  
    if (action.type === "login") {
        return {
            username:action.payload,
            isLoggedIn: true,
        };
    }
    if (action.type === "logout") {
        return {
            username:null,
            isLoggedIn: false,
        };
    }
    return state;
};

const store = createStore(userLoginReducer);

export default store;