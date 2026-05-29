import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import Mainpage from './pages/Mainpage'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={SplashScreen}/>
      <Route path='/main-page' Component={Mainpage}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
