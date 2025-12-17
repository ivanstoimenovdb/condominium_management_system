import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Buildings from './components/buildings/Buildings.jsx'
import Feeds from './components/feeds/Feeds.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import BuildingDetails from './components/buildingDetails/BuildingDetails.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <Routes >
          <Route index element= {<Home />} />

          <Route path='/buildings' element={<Buildings />} />
          <Route path='/buildings/:buidingId/details' element={<BuildingDetails />} />
          <Route path='/dashboard' element={<Feeds />}/>
          <Route path= '/register' element={<Register />} />
          <Route path= '/login'    element={<Login />} />
  
        </Routes>
        
      </main>
    </>
  )
}

export default App
