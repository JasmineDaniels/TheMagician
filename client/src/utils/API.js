import axios from "axios";

export const getMe = (token) => {
    return axios.get('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(token)
    });
};

export const createResults = (token, data) => {
  return axios.post('/api/users/results', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};

export const createPost = (token, data) => {
  return fetch('/api/users/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};

export const updatePost = (token, data) => {
  return fetch('/api/users/post', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};

export const deletePost = (token, data) => {
  return fetch('/api/users/post', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};


  
export const createUser = (userData) => {
    return fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
};
  
export const loginUser = (email, password) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, 
        password
      })
    })
};

// export const getMe = (token) => {
//     return axios({
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//       },
//     });
//   };



