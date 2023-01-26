import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) => {

    const [weather, setWeather] = useState([]);

    return(
        <WeatherContext.Provider value={{weather, setWeather}}>
            {children}
        </WeatherContext.Provider>
    )

}

export default WeatherContext;