import React from 'react'

const NavBar = () => {
    return (
       <Nav>
       <NavLink to="/">
          <h1>LOGO</h1>
       </NavLink>
       <Bars/>
       <NavMenu>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/AboutPage">About us</NavLink>
       <NavLink to="/EventPage">Event</NavLink>
       <NavLink to="ContactPage">Contact </NavLink>
       </NavMenu>
       </Nav>
    )
}

export default NavBar
