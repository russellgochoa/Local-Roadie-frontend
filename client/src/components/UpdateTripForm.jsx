import { useState, useNavigate, useEffect } from "react"
import { UpdateTrip } from "../services/Authorize"
import axios from "axios"
import { BASE_URL } from "../globals"
import { useParams } from "react-router-dom"

const UpdateTripForm = ({trip}) => {

// let navigate = useNavigate()
let {trip_id} = useParams()

const initialState = {
  date: trip.date,
  pickupTime: trip.pickupTime,
  pickupLocation: trip.pickupLocation,
  destination: trip.destination,
  gear: trip.gear,
  }


const [formValues, setFormValues] = useState(initialState)

const handleChange = event => {
  setFormValues({...initialState, [event.target.name]: event.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault()
  UpdateTrip({
    id: trip_id,
    ...formValues
  })
  // navigate('/trips')
  window.location.reload()

}

return trip ? (
  <div className="trip-form-container">
    <form className="trip-form form" onSubmit={handleSubmit}>
      <div className="grid">
        <div className="date">
          <div className="date-label-container"><label htmlFor='date'>date</label></div>
          <input
          onChange={handleChange}
          name="date"
          date="date"
          type="string"
          placeholder="date"
          value={formValues.date}
          required
          />
        </div>
        <div className="pickupTime">
          <div className="pickup-time-label-container"><label htmlFor='pickupTime'>pick Up time</label></div>
          <input
          onChange={handleChange}
          name="pickupTime"
          type="string"
          placeholder="pick up time"
          value={formValues.pickupTime}
          required
          />
        </div>
        <div className="pickupLocation">
          <div className="pickup-location-label-container"><label htmlFor='pickupLocation'>pick up time</label></div>
          <input
          onChange={handleChange}
          name="pickupLocation"
          type="string"
          placeholder="pick up location"
          value={formValues.pickupLocation}
          required
          />
        </div>
        <div className="destination">
          <div className="destination-label-container"><label htmlFor='destination'>destination</label></div>
          <input
          onChange={handleChange}
          name="destination"
          type="string"
          placeholder="destination"
          value={formValues.destination}
          required
          />
        </div>
        <div className="gear">
          <div className="gear-label-container"><label htmlFor='gear'>gear</label></div>
          <input
          onChange={handleChange}
          name="gear"
          type="string"
          placeholder="gear"
          value={formValues.gear}
          required
          />
        </div>


      </div>
      <div className="submit-button-container">
        <button className="submit-button button"
        >
          submit
        </button>
      </div>
    </form>
  </div>
) : null


}

export default UpdateTripForm