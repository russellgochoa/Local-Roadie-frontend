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
          <img style={{ display: 'block' }} src={vehicle.img} alt={vehicle.type} />
          <h3>{vehicle.type}</h3>
          
        </div>
      ))}
      <Link to ="/:trip_id"><button>confirm trip</button></Link>
    </div>
    
  )
}


export default Vehicles