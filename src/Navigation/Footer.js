import React from 'react'

import { Nav, NavLink } from './NavBarElements'

import {BrowserRouter as Router} from 'react-router-dom';

const Footer = () => {

    return (

       <Router> 

       <Nav>

       <NavLink to="/">

          <h1>LOGO</h1>

       </NavLink>

     

       

       </Nav>

       </Router>

      

    )

}

export default Footer
