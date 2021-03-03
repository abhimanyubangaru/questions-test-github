import React from 'react'
import {Link} from 'react-router-dom';

const Navi = () => {

  const navStyle = {
    color:"white"
  };

  return (
    <nav className="Nav">
     <img src='https://upload.wikimedia.org/wikipedia/en/6/6b/Cate_School_Logo.jpg' width='100'/> 
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li> Welcome</li>
        </Link>
        <Link style={navStyle} to='/game'>
          <li> Game</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navi
