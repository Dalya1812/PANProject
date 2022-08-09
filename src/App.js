import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Survey from './components/survey/Survey';
import Home from './pages/Home';
import Logo from '../src/assets/images/logo.png';

function App() {
  return (
    <div className="App">
    <Navbar/>
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Survey/>}/>
 <Route path='/home' element={<Home/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
