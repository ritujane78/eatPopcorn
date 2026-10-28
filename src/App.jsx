import { useState } from "react";
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


export default function App() {
  
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  

  return (
    <>
      <Navbar>
        <Logo  />  
        <Search />
        <NumList movies={movies}/>
        </Navbar>

      <Dashboard>
        <Box>
          <MovieList movies={movies} />
        </Box> 
        <Box>
          <>
              <WatchedSummary watched={watched} />

              <WatchedMovieList watched={watched} />
            </>
        </Box>
        </Dashboard>
    </>
  );
}
