import './today.css';
import { useContext,  useState } from 'react';
import WeatherContext from '../weatherContext/weatherContext';
import cloudy from '../../icons/cloudy.png';
import rain from '../../icons/rain.png';
import storm from '../../icons/storm.png';
import sun from '../../icons/sun.png';
   
const Today = () => {
    
    const {weather, setWeather} = useContext(WeatherContext);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const today = [...weather];
    const api = '72432146054257da561d8c8a173dd4ae';
    let weatherIcon = '';
    const [icons, setIcons] = useState([]);

    if(lat > 90){
        setLat(90);
    }else if(lat < -90){
        setLat(-90);
    }

    if(lon > 180){
        setLon(180);
    }else if(lon < -180){
        setLon(-180);
    }

    const handleSearch = () => {
    
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api}`)
            .then((res) => res.json())
            .then((data) => {
                setWeather([data]);
                const x = data.list[0].weather[0].icon;
                setIcons(x);
            })
            .catch(err => console.error(err));

    }

if(weather.length > 0){
    
    switch(icons){
        case "01d":
            weatherIcon = sun;
        break;

        case "01n":
            weatherIcon  = sun;
        break;

        case "02n":
            weatherIcon = cloudy;
        break;

        case "03d":
            weatherIcon = cloudy;
        break;

        case "03n":
            weatherIcon = cloudy;
        break;
        
        case "04n":
            weatherIcon = cloudy;
        break;

        case "04d":
            weatherIcon = cloudy;
        break;

        case "04g":
            weatherIcon  = storm;
        break;
        
        case "10n":
            weatherIcon  = rain;
        break;

        case "10d":
            weatherIcon  = rain;
        break;

        default: weatherIcon  = null;
    }

}


const Forescasts = () => {

    return(
<div>

         {today.map(t => <div key={t.city.id} className='aparte'>
            <div className="todayIc text-center">
                <h2>{t.list[0].dt_txt}</h2>
                <img src={weatherIcon} alt=""></img>
                <h1>{t.list[0].main.temp}</h1>
            </div>
            <div className="dateT d-flex text-center">
                <p>Wind speed: {t.list[0].wind.speed}</p>
                <p>Population: {t.city.population}</p>
            </div>
            <div className="ubi">
                <p>{t.city.name}</p>
            </div>
    </div>)}
</div>
    )
}

const Nothing = () => {

    return(
        <div className='nothing'>
            <h2>Search for the place with his Lat and Long that to get some information weather</h2>
        </div>
    )
}



    return(
        <div className="today text-center">
             <label for="openSearch" id="searchPlaces">Search for places</label>
             <input type="checkbox" id="openSearch" /> 
             <div className="search">
                    <label for="Lat">Lat:</label>
                    <input className='esInput' type="number" value={lat} id="Lat"  min="0" max="90" onChange={(e) => setLat(e.target.value)} /><br></br>
                    <label for="Lon">Lon:</label>
                    <input className='esInput' type="number" value={lon} id="Lon"  min="0" max="180" onChange={(e) => setLon(e.target.value)} /><br></br>
                    <div>
                    <button onClick={() => handleSearch()}>Search</button>
                    </div>
            </div>
            {weather.length === 0 ? <Nothing/> : <Forescasts/>}
        </div>
        
    )
}



export default Today;