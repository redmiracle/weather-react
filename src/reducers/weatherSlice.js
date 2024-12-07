import {DATA_ERROR, DATA_REQUEST, DATA_SUCCESS} from "../actions/action.js";

const defaultState = {
    country:"Israil",
    city: "Tel Aviv",
    temp: 28,
    pressure: 12000,
    sunset: new Date(),
    message:'Enter your city',


}

export const weatherSlice = (state = defaultState, action) => {
    switch (action.type) {
        case DATA_REQUEST:
            return {...state, message:"Loading..."};
        case DATA_SUCCESS:
        return {...state,message:"" ,...action.payload};
        case DATA_ERROR:
            return {...state,message:"There is no this city"};

     default:return state;
    }
}
