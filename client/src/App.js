import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'

import Home from './pages/Home'
import TripForm from './components/TripForm'
import EditTrip from './pages/EditTrip'
import Nav from './components/Nav'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Local Roadie
        </a>
      </header>
    </div>
  )
}

export default App
