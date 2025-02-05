import { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return;
    const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=d3ad48a9`
    );
    setMovies(response.data.Search || []);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=""
      />
      <button onClick={searchMovies}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} width="50" />
            {movie.Title} ({movie.Year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
