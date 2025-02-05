import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';

export async function fetchFilms(title) {
    const response = await axios.get(`${API_URL}/?t=${title}&apikey=d3ad48a9`);
    return response.data;
}