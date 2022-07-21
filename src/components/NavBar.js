import React from 'react';
import logo from '../images/animal-free-logo4.png';

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light ps-4">
        <a className="navbar-brand" href="/">
            <img src={logo} alt="brand logo" width="70" />
        </a>
    </nav>
  )
}


