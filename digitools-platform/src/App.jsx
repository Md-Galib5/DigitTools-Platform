import { useState } from 'react'
import NavBar from '../Component/Navbar'
import './App.css'
import Banner from '../Component/Banner'
import Info from '../Component/Info'
import ModelHeader from '../Component/Card-Section/ModelHeader'

function App() {

  return (
    <>
    <NavBar />
    <Banner />
    <Info />
    <ModelHeader />
    </>
  )
}

export default App
