import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3213/',
});

export default api