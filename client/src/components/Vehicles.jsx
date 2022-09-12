import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Vehicles = (props) => {
  let navigate = useNavigate()

  const showVehicle = (vehicle) => {
    navigate(`${vehicle.id}`)
  }

  return (
    <div className="vehicle-grid">
      {
      props.vehicles.map((vehicle) => (
        <div className="vehicle-card" onClick={() => showVehicle(vehicle)} key={vehicle.id}>
          <img style={{ display: 'block' }} src={vehicle.img} alt={vehicle.name} />
          <h3>{vehicle.name}</h3>
          
        </div>
      ))}
      <Link to ="/"><button>Back</button></Link>
    </div>
    
  )
}


export default Vehicles