import React from 'react'

function Movie({movie, setOnClick}) {
  return (
    <>
    <li onClick={setOnClick}>
                  <img src={movie.Poster? movie.Poster: ""} alt={`${movie.Title} poster`}  />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
      
    </>
  )
}

export default Movie
