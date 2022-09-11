
const TripForm = ({trip, handleTripChange, handleTripSubmit}) => {

  // const [trip] = useState([])
  // const initialState = {
  //   date: trip.date,
  //   pickupTime: trip.pickupTime,
  //   pickupLocation: trip.pickupLocation,
  //   destination: trip.destination,
  //   gear: trip.gear,
  // }
  // const [formState, setFormState] = useState(initialState)

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   let res = await axios.post('http://localhost:3001/trips', formState)
  //   console.log(res)
  //   setFormState(initialState)
  // }

  // const handleChange = (event) => {
  //   setFormState({ ...formState, [event.target.id]: event.target.value })
  // }

  return (trip) ? (

  <div className="trip-form-container">
  <h1 className='trip-form-title'>Book a Trip</h1>
    <form onSubmit={handleTripSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="string" id="date" name="date" onChange={handleTripChange} />
      <p></p>
      <label htmlFor="pick-up-time">Pick Up Time:</label>
      <input type="string" id="pick-up-time" name="pick-up-time" onChange={handleTripChange} />
      <p></p>
      <label htmlFor="pick-up-location">Pick Up Location:</label>
      <input type="string" id="pick-up-location" name="pick-up-location" onChange={handleTripChange} />
      <p></p>
      <label htmlFor="destination">Destination:</label>
      <input type="string" id="destination" name="destination" onChange={handleTripChange} />
      <label htmlFor="gear">Gear:</label>
      <input type="text" id="gear" name="gear" onChange={handleTripChange} />
      <p></p>
    </form>
    </div>
    ) : null

  }

export default TripForm