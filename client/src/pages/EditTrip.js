import UpdateTripForm from '../components/UpdateTripForm'

export default function EditTrip(props) {
  return (
    <UpdateTripForm
      trip={props.trip}
      tripFromState={props.tripFromState}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
    />
  )
}
