import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BASE_URL } from './globals'
import { CreateTrip, DestroyTrip, UpdateTrip } from './services/Authorize'
import axios from 'axios'

import Home from './pages/Home'
import TripForm from './components/TripForm'
import EditTrip from './pages/EditTrip'
import TripDetails from './pages/TripDetails'
import Nav from './components/Nav'
import About from './pages/About'
import Vehicles from './components/Vehicles'

function App() {
  const [trip, setTrip] = useState([])
  const [trips, setTrips] = useState([])
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [editing, setEditing] = useState(false)
  const [vehicles, setVehicles] = useState([])
  const [users, setUsers] = useState([])

  let navigate = useNavigate()

  const getTrips = async () => {
    const res = await axios.get(`${BASE_URL}/trips`)
    // console.log(res)
    setTrips(res.data)
  }
  useEffect(() => {
    getTrips()
  }, [])

  const getVehicles = async () => {
    const res = await axios.get(`${BASE_URL}/vehicles`)
    // console.log(res)
    setVehicles(res.data)
  }
  useEffect(() => {
    getVehicles()
  }, [])

  const getUsers = async () => {
    const res = await axios.get(`${BASE_URL}/users`)
    // console.log(res)
    setUsers(res.data)
  }
  useEffect(() => {
    getUsers()
  }, [])

  const initialTripState = {
    date: '',
    pickupTime: '',
    pickupLocation: '',
    destination: '',
    gear: '',
    userId: 4
  }

  const [tripFromState, setTripFormState] = useState(initialTripState)

  const handleTripChange = (e) => {
    console.log('handleTrip', e.target.name)
    setTripFormState({
      ...tripFromState,
      [e.target.name]: e.target.value
    })
  }

  const handleTripSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/trips`, tripFromState)
    console.log('fired', res)

    window.location.reload()
  }

  const editTrip = (trip, index) => {
    setEditing(true)
    setTrip(trip)
    setTripFormState(trip)
    navigate(`/trips/${trip.id}`, { state: { index: index } })
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
          <Route
            path="/"
            element={
              <Home
                handleTripChange={handleTripChange}
                handleTripSubmit={handleTripSubmit}
              />
            }
          />
          <Route
            path="/trips"
            element={
              <TripDetails
                trips={trips}
                handleTripChange={handleTripChange}
                handleTripSubmit={handleTripSubmit}
                tripFromState={tripFromState}
                deleteTrip={deleteTrip}
                editTrip={editTrip}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Vehicles vehicles={vehicles} />} />
          <Route path="/" element={<TripForm />} />
          <Route
            path="/trips/:trip_id"
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
