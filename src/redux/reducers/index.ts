import { combineReducers } from "redux";
import hotelReducer from "./hotelsReducer";

const rootReducer = combineReducers({
  hotels: hotelReducer
});

export default rootReducer;
