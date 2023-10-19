import './App.css';
import Weather from './Components/Weather';
import HomePage from './Components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/weather' element={<Weather/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
