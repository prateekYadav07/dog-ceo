import { combineReducers } from "redux";
import { dogReducer } from "./dog/dog.reducer";

const rootReducer = combineReducers({
    dog : dogReducer
});

export default rootReducer;
