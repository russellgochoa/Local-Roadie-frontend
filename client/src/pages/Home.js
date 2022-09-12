import TripForm from '../components/TripForm'

const Home = (props) => {
  return (
    <div className="home-page">
      {/* <h2>schedule trip</h2> */}
      <div className="trip-form-container">
        <TripForm />
      </div>
    </div>
  )
}

export default Home
