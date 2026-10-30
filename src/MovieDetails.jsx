import React from 'react'

function MovieDetails({selectedId, setSelectedId}) {
    function onCloseMovie(){
        setSelectedId("");
    }
  return (
    <div className='details'>
        <div className="btn-back" >
            <button className='btn-back' onClick={onCloseMovie}>
                &larr;
                </button>
            {selectedId}
        </div>
      
        </div>
  )
}

export default MovieDetails
