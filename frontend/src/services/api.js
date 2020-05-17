import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-trelloclone.herokuapp.com'
});

export default api;