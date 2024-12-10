import {useState} from "react";

import {useDispatch} from "react-redux";
import {fetchWeather} from "../features/api/api.js";


const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const getCity = e => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;