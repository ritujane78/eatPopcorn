import React, { useState } from 'react'
import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

function Dashboard({movies, watched}) {
  return (
    <div>
        <main className="main">
        <ListBox movies={movies} />
        

        <WatchedBox watched = {watched} />
      </main>
      
    </div>
  )
}

export default Dashboard
