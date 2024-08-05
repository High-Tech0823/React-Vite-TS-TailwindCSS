import { combineReducers } from "redux";
// import reducers
import users from "./users";
import event from "./event";

const reducers = combineReducers({
    users,
    event,
});

export default reducers;