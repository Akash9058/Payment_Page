import { KeyboardArrowDown, SearchSharp } from '@mui/icons-material'
import React from 'react'
import './navbar.css';

export default function Navbar() {
  return (
    
      <div className="container">
        <div className="leftContent">
          <div className="logo">EDYODA</div>
          <div className="dropdown">
            <span>Courses</span>
            <KeyboardArrowDown />
          </div>
          <div className="dropdown">
            <span>Programs</span>
            <KeyboardArrowDown />
          </div>
        </div>
        <div className="rightContent">
           <SearchSharp />
          <span>Log in</span>
          <button>JOIN NOW</button>
        </div>
      </div>
   
  );
}
