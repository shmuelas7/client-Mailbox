import axios from 'axios';
const api = axios.create({
    baseURL: 'https://tictactoeonline-server.onrender.com',
});

export default api