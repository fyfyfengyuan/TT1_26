import { createStore } from "redux";

const userLoginReducer = (state = { isLoggedIn: false, userid:null, username:null }, action) => {
  
    if (action.type === "login") {
        return {
            userid:action.payload.userid,
            username:action.payload.username,
            isLoggedIn: true,
        };
    }
    if (action.type === "logout") {
        return {
            username:null,
            userid:null,
            isLoggedIn: false,
        };
    }
    return state;
};

const store = createStore(userLoginReducer);

export default store;