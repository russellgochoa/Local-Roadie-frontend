import { useNavigate } from "react-router-dom"


const Vehicles = (props) => {
  let navigate = useNavigate()
 
  // const addVehicle = (vehicle) => {
  //   navigate(`${vehicle.id}`)
  // }

  return (
    <div className="vehicle-grid">
      {
      props.vehicles.map((vehicle) => (
        <div className="vehicle-card"  key={vehicle.id}>
          <img style={{ display: 'block' }} src="https://i.imgur.com/oA2duRu.jpg" alt={vehicle.type} />
          <h4>{vehicle.type}</h4>
          <h4>{vehicle.make}</h4> 
        </div>
        
      ))}
      {/* <Link to ="/trips/:id"><button className="submit-button button">confirm trip</button></Link> */}
    </div>
    
  )
}



export default Vehicles