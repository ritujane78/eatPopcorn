import { useState } from "react";
import Navbar from "./Navbar";
import { tempMovieData } from "./data/movies";
import Dashboard from "./Dashboard";
import { tempWatchedData } from "./data/watchedMovies";
import Search from "./Search";
import NumList from "./NumList";
import Logo from "./Logo";


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

      <Dashboard movies = {movies} watched = {watched} />
    </>
  );
}
