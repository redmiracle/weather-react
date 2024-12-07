import {combineReducers, legacy_createStore as createStore} from "redux";
import {weatherSlice} from "../reducers/weatherSlice.js";

const rootReducer = combineReducers({weather:weatherSlice})
export const store=createStore(rootReducer);