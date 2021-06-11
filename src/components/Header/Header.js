import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className='page-heading'>The Random Gender-ator</h1>
      <div className="button-container">
        <Link to='/'><button>Home</button></Link>
        <Link to='/about'><button>About</button></Link>
        <Link to='/savedgenders'><button>Saved Genders</button></Link>
      </div>
    </header>
  )
}

export default Header;
