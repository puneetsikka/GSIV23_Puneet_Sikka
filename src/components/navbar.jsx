import React, { useState } from 'react';
import './staticFiles/Navbar.css'; // Import your CSS file for styling
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  const [query,setQuery] = useState('')
  function handleChange(e){
    setQuery(e.target.value)
  }
  function sendSearchQuery(e){
    e.preventDefault();
    props.callback(query)
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <form onSubmit={e=>sendSearchQuery(e)}>
        <input
          type="text"
          placeholder={"Search"}
          onChange={e=>handleChange(e)}
          className="search-input"
        />
        </form>
      </div>
      <div className="navbar-right">
      <Link to="/" style={{ textDecoration: 'none', color: '#4a4a4a' }}>
        <HomeIcon />
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
