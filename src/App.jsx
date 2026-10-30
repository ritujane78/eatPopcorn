import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { tempMovieData } from "./data/movies";
import Dashboard from "./Dashboard";
import Search from "./Search";
import NumList from "./NumList";
import Logo from "./Logo";
import MovieList from "./MovieList";
import Box from "./Box";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import { tempWatchedData } from "./data/watchedMovies";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";

const key = '50c2d22f';

export default function App() {
  
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  useEffect(() => {
    if(query.length < 3){
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
    
  },[query])

  const fetchMovies = async () => {
    try {
    setIsLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${key}&s=${query}`);

    if(!res.ok) throw new Error("Something went wrong with fetching movies");

    const data = await res.json();

    if(data.Response === "False") throw new Error("Movie not found.")
    setMovies(data.Search)
    } catch(error){
      console.error(error.message)
      setError(error.message)
    } finally {
      setIsLoading(false);
    }
  }
  

  return (
    <>
      <Navbar>
        <Logo  />  
        <Search  query={query} setQuery={setQuery} />
        <NumList movies={movies}/>
        </Navbar>

      <Dashboard>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} setSelectedId={setSelectedId} />}
          {error && <ErrorMessage message={error} /> }
        </Box> 
        <Box>
          {selectedId? <MovieDetails selectedId={selectedId} setSelectedId={setSelectedId} />
          : (
          <>
              <WatchedSummary watched={watched} />

              <WatchedMovieList watched={watched} />
            </>
            )}
        </Box>
        </Dashboard>
    </>
  );
}
