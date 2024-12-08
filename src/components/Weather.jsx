import {useSelector} from "react-redux";

const Weather = () => {

    const weather=useSelector(state => state.weather)

    return (
        <div className={'infoWeath'}>
            {!weather.message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {weather.sunset.toLocaleTimeString()}</p>
                </>
            }{weather.message}
        </div>
    )
}

export default Weather;