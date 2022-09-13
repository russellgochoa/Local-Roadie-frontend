import { useNavigate } from "react-router-dom"


const TripForm = ({trip, handleTripChange, handleTripSubmit}) => {

  let navigate = useNavigate()

  return (
 

  <div className="trip-form-container">
  <h1 className='trip-form-title'>book a trip</h1>
    <form className='trip-form form' onSubmit={ handleTripSubmit }>
      <label htmlFor="date">date  </label>
      <input type="string" id="date" name="date" onChange={handleTripChange} />
      <p></p>
      <label htmlFor="pick-up-time">pick up time  </label>
      <input type="string" id="pick-up-time" name="pick-up-time" onChange={handleTripChange} />
      <p></p>
      <label htmlFor="pick-up-location">pick up location  </label>
      <input type="string" id="pick-up-location" name="pick-up-location" onChange={handleTripChange} />
      <p></p>
      <label htmlFor="destination">destination  </label>
      <input type="string" id="destination" name="destination" onChange={handleTripChange} />
      <p></p>
      <label htmlFor="gear">gear  </label>
      <input type="text" id="gear" name="gear" onChange={handleTripChange} />
      <p></p>
      <button className="submit-button button" onClick={() => navigate('/vehicles')}>choose a vehicle</button>
      <p></p>
    </form>
    </div>
    ) 

  }

export default TripForm