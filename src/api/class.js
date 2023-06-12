
import axios from "axios";


// Add a class
export const addClass = async classData => {
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/classes`, classData)
  console.log(res.data);
  return res.data
};

// get all classes 
export const getAllClass = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/classes`)
  return res.data
};


//get filtered classes for instructor
export const getClasses = async email => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/classes/${email}`)
  const data = await response.json()
  return data
};



// update a class
export const updateClass = async (classData, id) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/classes/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(classData),
  })

  const data = await response.json()
  return data
}