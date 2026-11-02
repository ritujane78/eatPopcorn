import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Search from "./Search";
import NumList from "./NumList";
import Logo from "./Logo";
import MovieList from "./MovieList";
import Box from "./Box";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

const KEY = "50c2d22f";

export default function App() {
  const [watched, setWatched] = useLocalStorageState("watched", []);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  //   if (query.length < 3) {
  //     setMovies([]);
  //     setError("");
  //     setIsLoading(false);
  //     return;
  //   }

  //   const controller = new AbortController();

  //   async function fetchMovies() {
  //     try {
  //       setIsLoading(true);
  //       setError("");

  //       const res = await fetch(
  //         `http://www.omdbapi.com?apikey=${KEY}&s=${query}`,
  //         { signal: controller.signal }
  //       );

  //       if (!res.ok) {
  //         throw new Error("Something went wrong with fetching movies");
  //       }

  //       const data = await res.json();

  //       if (data.Response === "False") {
  //         throw new Error("Movie not found.");
  //       }

  //       setMovies(data.Search);
  //     } catch (error) {
  //       if (error.name !== "AbortError") {
  //         console.error(error.message);
  //         setError(error.message);
  //         setMovies([]);
  //       }
  //     } finally {
  //       if (!controller.signal.aborted) {
  //         setIsLoading(false);
  //       }
  //     }
  //   }
  //   setSelectedId("");

  //   fetchMovies();

  //   return () => {
  //     controller.abort();
  //   };
  // }, [query]);

  const {movies, isLoading, error} = useMovies(query, onCloseMovie);
  
  function handleWatched(newMovie) {
    setWatched((watched) => [...watched, newMovie]);
  }

  function handleWatchedDelete(id) {
    setWatched((watched) =>
      watched.filter((movie) => movie.imdbID !== id)
    );
  }

  function onCloseMovie() {
    setSelectedId(null);
  }

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumList movies={movies} />
      </Navbar>

      <Dashboard>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              setSelectedId={setSelectedId}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              KEY={KEY}
              onAddClick={handleWatched}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              watched={watched}
              handleCloseMovie={onCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDelete={handleWatchedDelete}
              />
            </>
          )}
        </Box>
      </Dashboard>
    </>
  );
}
