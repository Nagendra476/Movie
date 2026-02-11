import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home.jsx'
import SeatHall from './Components/SeatHall.jsx'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
