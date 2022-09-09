const TripForm = ({user}) => {

  return (user) ? (

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
      <button type="submit">Update Trip</button>
      <p></p>
      <button type="delete" onClick={deleteTrip}>
        Cancel Trip
      </button>
      <p></p>
    </form>
    </div>
    ) : null

  }

export default TripForm