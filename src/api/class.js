


// Add a class
export const addClass = async classData => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/classes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(classData),
    })
  
    const data = await response.json()
    return data
  };



  //get filtered classes for instructor
export const getClasses = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/classes/${email}`)
    const data = await response.json()
    return data
  };



  // update a class
export const updateRoom = async (roomData, id) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/classes/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(roomData),
  })

  const data = await response.json()
  return data
}