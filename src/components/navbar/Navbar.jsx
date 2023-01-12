import { React, useRef } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <nav>
      <div className="nav-logo">
        <h1>WupxyCoffe</h1>
      </div>

      <div className="nav-link" ref={navRef}>

        <div className="link1" >
          <p><a href="#home" className='animasi-middle'>Home</a></p>
          <p><a href="#brand" className='animasi-middle'>Brand</a></p>
        </div>

        <div className="link2" >
          <p><a href="#service" className='animasi-middle'>Service</a></p>
          <p><a href="#contact" className='animasi-middle'>Contact</a></p>
        </div>

      </div>

      <button onClick={showNavBar} className='nav-menu-btn'>
        <FaBars color='white' fontSize='1.5rem'/>
      </button>
    </nav>
  )
}

export default Navbar
