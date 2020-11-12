import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://localhost:44368/api',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'https://localhost:8080/',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS, POST'
    }
})