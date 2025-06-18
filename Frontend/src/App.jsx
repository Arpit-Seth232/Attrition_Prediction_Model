import React from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import DashBoard from './Pages/DashBoard'




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App