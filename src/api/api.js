
import {api_key, base_url} from "../utils/constants.js";
import {dataError, dataRequest, dataSuccess} from "../actions/action.js";


export const fetchWeather=(city,dispatch)=>{

    dispatch(dataRequest());
     fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
    .then(result =>result.json())
    .then(data =>{
        dispatch(
            dataSuccess({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset * 1000)
            })

        )})
         .catch(dispatch(dataError()));


}