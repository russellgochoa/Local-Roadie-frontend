import Client from './api'

export const CreateTrip = async (data) => {
  try {
    const res = await Client.post('/trips/:trip_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateTrip = async (data) => {
  try {
    const res = await Client.put(`/trips/${data.id}`, data)
  } catch (error) {
    throw error
  }
}

export const DestroyTrip = async (data) => {
  try {
    const res = await Client.delete(`/trips/${data}`)
    return res.data
  } catch (error) {
    throw error
  }
}
