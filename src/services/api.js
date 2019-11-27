import axios from 'axios';

const api = axios.create({ baseURL: '../data.json' });

export default api;