import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
  return (
      <nav>
          <h3>Logo</h3>
          <ul className="navlinks">
              <Link to ="/about"><li>About</li></Link>
              <Link to ="/shop"><li>Shop</li></Link>
              <Link to ="/show"><li>Show</li></Link>
          </ul>
      </nav>
   
  );
}

export default Nav;