import AuthReducer from "./auth";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({ auth: AuthReducer });

export default rootReducer;
