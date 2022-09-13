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
    gear: ''
  }

  const [tripFromState, setTripFormState] = useState(initialTripState)

  const handleTripChange = (event) => {
    setTripFormState({
      ...tripFromState,
      [event.target.id]: event.target.value,
      trip_id: selectedTrip.id
    })
  }

  const handleTripSubmit = async (event) => {
    event.preventDefault()
    if (editing) {
      await UpdateTrip(tripFromState)
      setTripFormState(initialTripState)
      let modifiedTrip = selectedTrip
      navigate('/:trip_id')
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
      navigate('/vehicles')
      window.location.reload()
    }
  }

  const editTrip = (trip, index) => {
    setEditing(true)
    setTrip(trip)
    setTripFormState(trip)
    navigate('/:trip_id', { state: { index: index } })
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
          <Route
            path="/trips/:id"
            element={
              <TripDetails
                selectedTrip={selectedTrip}
                handleTripChange={handleTripChange}
                handleTripSubmit={handleTripSubmit}
                tripFromState={tripFromState}
                deleteTrip={deleteTrip}
                editTrip={editTrip}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/" element={<TripForm />} />
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
