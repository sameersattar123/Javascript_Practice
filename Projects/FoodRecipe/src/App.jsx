import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Favorite from "./pages/Favorite/Favorite"
import Details from "./pages/Details/Details"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <div className="min-h-screen text-lg text-gray-600 p-6 bg-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorite/>} />
        <Route path='/recipe-item/:id' element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App