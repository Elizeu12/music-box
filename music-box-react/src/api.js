import axios from 'axios';

const api = axios.create({
    baseURL: "https://62423a69b6734894c14e7b63.mockapi.io/music"
})

export default api;