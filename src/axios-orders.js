import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-70eca.firebaseio.com/'
});

export default instance;
