import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BASE_URL } from './globals'
import { CreateTrip, DestroyTrip, UpdateTrip } from './services/Authorize'
import axios from 'axios'

import Home from './pages/Home'
import TripForm from './components/TripForm'
import EditTrip from './pages/EditTrip'
import Nav from './components/Nav'
import About from './pages/About'

function App() {
  const [trip] = useState([])
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [editing, setEditing] = useState(false)

  let navigate = useNavigate()

  const initialTripState = {
    date: trip.date,
    pickupTime: trip.pickupTime,
    pickupLocation: trip.pickupLocation,
    destination: trip.destination,
    gear: trip.gear
  }

  const [tripFromState, setTripFormState] = useState(initialTripState)

  const handleTripChange = (event) => {
    setTripFormState({
      ...tripFromState,
      [event.target.id]: event.target.value
    })
  }

  const handleTripSubmit = async (event) => {
    event.preventDefault()
    if (editing) {
      await UpdateTrip(tripFromState)
      setTripFormState(initialTripState)
      let modifiedTrip = selectedTrip
      navigate('/')
      window.location.reload()
    } else {
      await CreateTrip({
        date: tripFromState.date,
        pickupTime: tripFromState.pickupTime,
        pickupLocation: tripFromState.pickupLocation,
        destination: tripFromState.destination,
        gear: tripFromState.gear
      })
      let modifiedTrip = selectedTrip
      modifiedTrip.trip.push(tripFromState)
      navigate('/')
      window.location.reload()
    }
  }

  const editTrip = (trip, index) => {
    setEditing(true)
    setTrip(trip)
    setTripFormState(trip)
    navigate('/trips/edit', { state: { index: index } })
  }

  const deleteTrip = async (trip_id) => {
    await DestroyTrip(trip_id)
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<TripForm />} />
          <Route
            path="/trips/edit"
            element={
              <EditTrip
                trip={trip}
                tripFromState={tripFromState}
                onChange={handleTripChange}
                onSubmit={handleTripSubmit}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
