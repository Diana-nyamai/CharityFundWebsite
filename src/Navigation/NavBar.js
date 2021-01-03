import React from 'react'
import { Bars, Nav, NavLink, NavMenu } from './NavBarElements'
import {BrowserRouter as Router} from 'react-router-dom';

const NavBar = () => {
    return (
       <Router> 
       <Nav>
       <NavLink to="/">
          <h1>LOGO</h1>
       </NavLink>
       <Bars/>
       <NavMenu>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/EventPage">Event</NavLink>
       <NavLink to="/AboutPage">About Us</NavLink>
       <NavLink to="/ContactPage">Contact Us</NavLink>
       </NavMenu>
       </Nav>
       </Router>
      
    )
}

export default NavBar
