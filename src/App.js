import './App.css';
import WeatherCard from './Components/SensorCard';
import SearchBar from './Components/SearchBar';
import HomePage from './Components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/weather' element={<WeatherCard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
