import TripForm from '../components/TripForm'

const TripDetails = (props) => {
  return (
    <section className="trip-page">
      <TripForm
        handleTripChange={props.handleTripChange}
        handleTripSubmit={props.handleTripSubmit}
        tripFromState={props.tripFromState}
      />
      <div className="trip-details-grid">
        {props.selectedTrip.map((trip, index) => (
          <div className="trip" key={trip.id}>
            <h3>{trip.body}</h3>
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
              Edit Trip
            </button>
            <button
              className="delete-button button"
              onClick={() => {
                props.deleteTrip(trip.id)
              }}
            >
              Cancel Trip
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TripDetails
