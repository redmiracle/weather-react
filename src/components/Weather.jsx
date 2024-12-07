import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const Weather = ({message}) => {

    const weather=useSelector(state => state.weather)
    useEffect(() => {
        console.log(weather.message)
    },[weather.message])

    return (
        <div className={'infoWeath'}>
            {!weather.message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {weather.sunset.toLocaleTimeString()}</p>
                </>
            }
            {weather.message}
        </div>
    )
}

export default Weather;