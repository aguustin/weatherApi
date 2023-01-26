import { useContext } from 'react';
import WeatherContext from '../weatherContext/weatherContext';
import antena from '../../icons/antena.png';
import './details.css';

const Details = () => {
    const {weather} = useContext(WeatherContext);
    const det = [...weather];

    const NoHighlights = () => {
        return (
            <div className="nohighlights container">
                    <img src={antena} alt=""></img>
                    <h3>Place not found</h3>
            </div>
        )
    }

    const Highlights = () => {

        return(
            <div className="details container">
                <div className="containerDetails container">
                    <h3>Today's Highlights</h3>
                    <div className="d-flex flex-wrap">
                        {det.map(t => <div key={t.city.id} className="highligts col-lg-5 col-md-5 col-sm-9">
                            <p>Humidity</p>
                            <h1>{t.list[0].main.humidity}%</h1>
                        </div>)}
                        {det.map(t => <div key={t.city.id} className="highligts col-lg-5 col-md-5 col-sm-9">
                            <p>Pressure</p>
                            <h1>{t.list[0].main.pressure}kph</h1>
                        </div>)}
                        {det.map(t => <div key={t.city.id} className="highligts col-lg-5 col-md-5 col-sm-9">
                            <p>Min temp</p>
                            <h1>{t.list[0].main.temp_min}°C</h1>
                        </div>)}
                        {det.map(t => <div key={t.city.id} className="highligts col-lg-5 col-md-5 col-sm-9">
                            <p>Max temp</p>
                            <h1>{t.list[0].main.temp_max}°C</h1>
                        </div>)}
                    </div>
                </div>
            </div>
        );
        
    }

    return(
        <div>
            { weather.length === 0 ? <NoHighlights/> : <Highlights/>}
        </div>
        
    )
    
}

export default Details;