import { useState, useNavigate, useEffect } from "react"
import { UpdateTrip } from "../services/Authorize"
import axios from "axios"
import { BASE_URL } from "../globals"

const UpdateTripForm = ({trip}) => {

  let navigate = useNavigate()

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
    id: trip.id,
    ...formValues
  })
  navigate('/')
  window.location.reload()

}

return trip ? (
  <div className="trip-form-container">
    <form className="trip-form form" onSubmit={handleSubmit}>
      <div className="grid">
        <div className="date">
          <div className="date-label-container"><label htmlFor='date'>Date</label></div>
          <input
          onChange={handleChange}
          date="date"
          type="string"
          placeholder="Date"
          value={formValues.date}
          required
          />
        </div>
        <div className="pickupTime">
          <div className="pickup-time-label-container"><label htmlFor='pickupTime'>Pick Up Time</label></div>
          <input
          onChange={handleChange}
          date="pickupTime"
          type="string"
          placeholder="Pick Up Time"
          value={formValues.pickupTime}
          required
          />
        </div>
        <div className="pickupLocation">
          <div className="pickup-location-label-container"><label htmlFor='pickupLocation'>Pick Up Time</label></div>
          <input
          onChange={handleChange}
          date="pickupLocation"
          type="string"
          placeholder="Pick Up Location"
          value={formValues.pickupLocation}
          required
          />
        </div>
        <div className="destination">
          <div className="destination-label-container"><label htmlFor='destination'>Destination</label></div>
          <input
          onChange={handleChange}
          date="destination"
          type="string"
          placeholder="Destination"
          value={formValues.destination}
          required
          />
        </div>
        <div className="gear">
          <div className="gear-label-container"><label htmlFor='gear'>Gear</label></div>
          <input
          onChange={handleChange}
          date="gear"
          type="string"
          placeholder="Gear"
          value={formValues.gear}
          required
          />
        </div>


      </div>
      <div className="submit-button-container">
        <button className="submit-button button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
) : null


}

export default UpdateTripForm