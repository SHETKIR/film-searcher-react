import { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
    const [title, setTitle] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://www.omdbapi.com/?apikey=d3ad48a9&s=${title}`);
        setMovies(response.data.Search || []);
    };

    const handleInputChange = (event) => {
        setTitle(event.target.value);
    };

    const makeFinalList = () => {
        return movies.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
        ));
    };

    return (
        <div>
            <input value={title} onChange={handleInputChange} />
            <button onClick={searchMovies}>Search</button>

            <ul>
                {makeFinalList()}
            </ul>
        </div>
    );
};

export default MovieSearch;