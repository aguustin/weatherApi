import './fiveForecast.css';
import { useContext } from 'react';
import WeatherContext from '../weatherContext/weatherContext';
import Details from '../details/details.js';
import cloudy from '../../icons/cloudy.png';
import rain from '../../icons/rain.png';
import storm from '../../icons/storm.png';
import sun from '../../icons/sun.png';
import snow from '../../icons/snow.png';  

const FiveForecast = () => {
    
 const {weather} = useContext(WeatherContext);
 let weatherIcon = [];
 const loop = 6;
 const fiveF = [...weather];

 if(weather.length > 0){
   
        for(let i = 1; i <= loop; i++){

            weatherIcon[i] = fiveF[0].list[i].weather[0].icon;

            switch(weatherIcon[i]){

                case "01d":
                    weatherIcon[i] = sun;
                break;

                case "01n":
                    weatherIcon[i]  = sun;
                break;

                case "02n":
                    weatherIcon[i] = cloudy;
                break;

                case "03d":
                    weatherIcon[i]= cloudy;
                break;

                case "03n":
                    weatherIcon[i] = cloudy;
                break;
                
                case "04n":
                    weatherIcon[i] = cloudy;
                break;

                case "04d":
                    weatherIcon[i] = cloudy;
                break;

                case "04g":
                    weatherIcon[i]  = storm;
                break;
                
                case "10n":
                    weatherIcon[i]  = rain;
                break;

                case "10d":
                    weatherIcon[i]  = rain;
                break;

                case "13d":
                    weatherIcon[i]  = snow;
                break;

                default: weatherIcon[i] = null;
            }
        }
}

    return(
        <div className="fiveForecast">
            <div className="containerForecast d-flex flex-wrap container">
                {(() => {
                    let five = [];
                    for(let i = 1; i <= loop; i++){
                        five.push(fiveF.map(t => <div key={t.city.id} className="detailsForecast"><p>{t.list[i].dt_txt}</p><img src={weatherIcon[i]} alt=""></img><p>{t.list[i].main.temp}°C</p></div>))
                    }
                    return five
                  
                })()}
            </div>
            <Details/>
        </div>
    );
}

export default FiveForecast;
