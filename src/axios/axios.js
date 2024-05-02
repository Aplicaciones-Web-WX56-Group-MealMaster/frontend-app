import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/mealMaster/api/v1/', // Ruta base de tu API
});

export default http