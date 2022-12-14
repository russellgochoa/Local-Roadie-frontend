import { useNavigate } from "react-router-dom"

const TripForm = ({setTrip, handleTripChange, handleTripSubmit}) => {

  let navigate = useNavigate()
  console.log('heyheyhey',handleTripChange)
  return (
 

  <div className="trip-form-container">
  <h1 className='trip-form-title'>book a trip</h1>
    <form className='trip-form form' onSubmit={e => handleTripSubmit(e) }>
      <label htmlFor="date">date  </label>
      <input type="string" id="date" name="date" onChange={handleTripChange} placeholder="date" />
      <p></p>
      <label htmlFor="pick-up-time">pick up time  </label>
      <input type="string" id="pick-up-time" name="pickupTime" onChange={handleTripChange} placeholder="pick up time" />
      <p></p>
      <label htmlFor="pick-up-location">pick up location  </label>
      <input type="string" id="pick-up-location" name="pickupLocation" onChange={handleTripChange} placeholder="pick up location" />
      <p></p>
      <label htmlFor="destination">destination  </label>
      <input type="string" id="destination" name="destination" onChange={handleTripChange} placeholder="destination" />
      <p></p>
      <label htmlFor="gear">gear  </label>
      <input type="text" id="gear" name="gear" onChange={handleTripChange} placeholder="gear" />
      <p></p>
      <label htmlFor="vehicle">transport  </label>
      <select name="vehicleId" id="vehicle-options" onChange={handleTripChange}>
        <option value="default">select vehicle</option>
        <option value="2">truck</option>
        <option value="1">sprinter van</option>
        <option value="3">box truck</option>
        </select>
      <p></p>
      <button className="button">submit</button>
    </form>
    </div>
    ) 

    // onClick={() => navigate('/trips')}

  }

export default TripForm