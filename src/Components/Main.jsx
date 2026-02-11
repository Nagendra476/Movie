import { Routes,Route } from 'react-router-dom';
import React from 'react';
import Home from '../Components/Home.jsx';
import SeatHall from '../Components/SeatHall.jsx';
import Login from '../Components/Login.jsx';
import Practice from '../Components/Practice.jsx';
import Navbar2 from '../Components/Navbar2.jsx';
import Prop from '../Components/Prop.jsx';
import Flag from '../Components/Flag.jsx';
{/*
import PopularSection from './Components/PopularSection';
import AppPromo from './Components/AppPromo';
import Footer from './Components/Footer';
*/}
function App() {
  return (
    
    <div className="App font-sans">
      <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/seat-hall/:id' element={<SeatHall />} />
            <Route path='/login' element={<Login />} />
            <Route path='/practice' element={<Practice />} />
            <Route path='/navbar2' element={<Navbar2 />} />
            <Route path='/employee' element={<Prop />} />
            <Route path='/flag' element={<Flag />} />
          </Routes>  
      </div>

      {/*
      <PopularSection />
      <AppPromo />
      +
      */}
      
    </div>
  );
}

export default App;
