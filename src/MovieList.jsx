import React from 'react'
import Movie from './Movie'

function MovieList({movies, setSelectedId }) {
  function handleClick(selectedMovieId){
    setSelectedId(id => id === selectedMovieId? "":selectedMovieId);
  }
  return (
    <>
    <ul className="list">
              {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} setOnClick  = {() => handleClick(movie.imdbID)} />
                
              ))}
            </ul>
      
    </>
  )
}

export default MovieList
