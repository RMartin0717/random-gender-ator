import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <header className='header title'>
        <h1 className='page-heading'>The Random Gender-ator</h1>
        <div className="button-container">
          <Link to='/'><button className='link-btn'>Home</button></Link>
          <Link to='/about' className='link-btn'><button>About</button></Link>
          <Link to='/savedgenders' className='link-btn'><button>Saved Genders</button></Link>
        </div>
      </header>
    </div>
  )
}

export default Header;
