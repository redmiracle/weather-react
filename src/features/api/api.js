
import {api_key, base_url} from "../../utils/constants.js";
import {dataError, dataRequest, dataSuccess} from "../weather/weatherSlice.js";



export const fetchWeather=(city)=> {
    return async dispatch=> {
        dispatch(dataRequest());

        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            const newSunset=new Date(data.sys.sunset * 1000).toLocaleTimeString()
             dispatch(dataSuccess({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: newSunset,
            }));

        } catch {
            dispatch(dataError())
        }
    }
}

    //  fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
    // .then(result =>result.json())
    // .then(data =>{
    //     dispatch(
    //         dataSuccess({
    //             country: data.sys.country,
    //             city: data.name,
    //             temp: data.main.temp,
    //             pressure: data.main.pressure,
    //             sunset: new Date(data.sys.sunset * 1000)
    //         })
    //
    //     )})
    //      .catch(()=>{
    //          dispatch(dataError({}));
    //
    //      });


