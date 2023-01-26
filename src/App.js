import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Today from './components/today/today';
import FiveForecast from './components/fiveForecast/fiveForecast';
import { WeatherContextProvider } from './components/weatherContext/weatherContext';

function App() {
  return (
    
    <div className="App">
      <WeatherContextProvider>
      <Today></Today>
      <div className='fiveForecast-container mx-auto'>
        <FiveForecast></FiveForecast>
      </div>
      </WeatherContextProvider>
    </div>
    
  );
}

export default App;
