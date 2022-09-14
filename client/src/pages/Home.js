import TripForm from '../components/TripForm'

const Home = (props) => {
  // console.log(props.handleTripChange)
  return (
    <div className="home-page">
      <div className="trip-form-container">
        <TripForm
          handleTripChange={props.handleTripChange}
          handleTripSubmit={props.handleTripSubmit}
        />
      </div>
    </div>
  )
}

export default Home
