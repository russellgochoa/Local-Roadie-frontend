import { useNavigate } from "react-router-dom"

import { Link } from 'react-router-dom'


const Vehicles = (props) => {
  let navigate = useNavigate()
 
  const addVehicle = (vehicle) => {
    navigate(`${vehicle.id}`)
  }

  return (
    <div className="vehicle-grid">
      {
      props.vehicles.map((vehicle) => (
        <div className="vehicle-card"  key={vehicle.id}>
          <img style={{ display: 'block' }} src={vehicle.img} alt={vehicle.type} />
          <h3>{vehicle.type}</h3>
          
        </div>
        
      ))}
      {/* <Link to ="/trips/:id"><button className="submit-button button">confirm trip</button></Link> */}
    </div>
    
  )
}

// onClick={() => addVehicle(vehicle)}

export default Vehicles