import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const TripForm = () => {

  const [trip] = useState([])
  const initialState = {
    date: trip.date,
    pickupTime: trip.pickupTime,
    pickupLocation: trip.pickupLocation,
    destination: trip.destination,
    gear: trip.gear,
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/trips', formState)
    console.log(res)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (trip) ? (

  <div className="trip-form-container">
  <h1 className='trip-form-title'>Book a Trip</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="string" id="date" name="date" onChange={handleChange} />
      <p></p>
      <label htmlFor="pick-up-time">Pick Up Time:</label>
      <input type="string" id="pick-up-time" name="pick-up-time" onChange={handleChange} />
      <p></p>
      <label htmlFor="pick-up-location">Pick Up Location:</label>
      <input type="string" id="pick-up-location" name="pick-up-location" onChange={handleChange} />
      <p></p>
      <label htmlFor="destination">Destination:</label>
      <input type="string" id="destination" name="destination" onChange={handleChange} />
      <label htmlFor="gear">Gear:</label>
      <input type="text" id="gear" name="gear" onChange={handleChange} />
      <p></p>
    </form>
    </div>
    ) : null

  }

export default TripForm