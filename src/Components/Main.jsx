import { Routes,Route } from 'react-router-dom';
import React from 'react';
import Home from '../Components/Home.jsx';
import SeatHall from '../Components/SeatHall.jsx';



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
