import React, { useState } from 'react'
import Logo from './Logo';
import Search from './Search';
import NumList from './NumList';

function Navbar({children}) {
  return (
    <>
      <nav className="nav-bar">
        {children}
        
      </nav>
    </>
  )
}

export default Navbar
