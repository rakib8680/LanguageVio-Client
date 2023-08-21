

// save a user to database
export const saveUser = result => {
  console.log(result);
  // console.log(result?.displayName);
  // console.log(result?.photoURL);
  const currentUser = {
    email: result?.email,
    name: result?.displayName,
    image: result?.photoURL,
  }

  fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${result?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())
    .then(data => console.log(data))
};


// set role 
export const setRole = (email,role) => {
  const currentUser = {
    role: role,
  }

  return fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  }).then(res => res.json())
}



// Get role
export const getRole = async email => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${email}`)
  const user = await response.json()
  return user?.role
};


// get all users 
export const getAllUsers = async email => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`)
  const users = await response.json()
  return users
}