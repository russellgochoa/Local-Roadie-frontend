import TripForm from '../components/TripForm'

const TripDetails = (props) => {
  let showTrip
  console.log(props.trips)
  if (props.trips) {
    showTrip = (
      <div className="trip-details-grid">
        {props.trips.map((trip, index) => (
          <div className="trip" key={trip.id}>
            <h3>date: {trip.date}</h3>
            <h3>pickup time: {trip.pickupTime}</h3>
            <h3>pickup location: {trip.pickupLocation}</h3>
            <h3>destination: {trip.destination}</h3>
            <h3>gear: {trip.gear}</h3>
            <button
              className="edit-button button"
              onClick={() => {
                props.editTrip(
                  {
                    id: trip.id,
                    date: trip.date,
                    pickupTime: trip.pickupTime,
                    pickupLocation: trip.pickupLocation,
                    destination: trip.destination,
                    gear: trip.gear
                  },
                  index
                )
              }}
            >
              edit trip
            </button>
            <button
              className="delete-button button"
              onClick={() => {
                props.deleteTrip(trip.id)
              }}
            >
              cancel trip
            </button>
          </div>
        ))}
      </div>
    )
  }

  return <section className="trip-page">{showTrip}</section>
}

export default TripDetails
