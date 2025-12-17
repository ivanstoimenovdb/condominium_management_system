import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Buildings from './components/buildings/Buildings.jsx'
import Feeds from './components/feeds/Feeds.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import BuildingDetails from './components/buildingDetails/BuildingDetails.jsx'
import CreateBuilding from './components/buildingForms/CreateBuilding.jsx'
import EditBuilding from './components/buildingForms/EditBuilding.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <Routes >
          <Route index element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buildings' element={<Buildings />} />
          <Route path='/buildings/:buildingId/details' element={<BuildingDetails />} />
          <Route path='/dashboard' element={<Feeds />} />
          <Route path='/buildings/create' element={<CreateBuilding />} />
          <Route path='/buildings/:id/edit' element={<EditBuilding />} />
        </Routes>

      </main>
    </>
  )
}

export default App
