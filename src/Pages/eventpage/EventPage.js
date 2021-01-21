import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import UpcomingEvents from '../homepage/UpcomingEvents';

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="pink" fixed="top" dark expand="md" scrolling transparent>
              <Navbar.Brand href="/">
              <img src="../Images/logo.png" alt="logo"/>
              </Navbar.Brand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <Nav.Link href="/">Home</Nav.Link>
                  </MDBNavItem>
                   <MDBNavItem>
                    <Nav.Link href="/AboutPage">About Amie</Nav.Link>
                  </MDBNavItem> 
                   <MDBNavItem>
                  <Nav.Link href="/StoriesUntold">Stories Untold</Nav.Link>
                </MDBNavItem>
                  <MDBNavItem active>
                    <Nav.Link href="/EventPage">Events</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/ContactPage">Contact Us</Nav.Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView src="../Images/eventbg.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 style={{fontSize:'100px'}}> EVENTS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{fontWeight:'bold'}}>Show some Love 2021
              </h5></Animated>
              <Animated animationIn="bounceInRight"><p style={{fontWeight:'bold'}}>This Year, Show some love by sponsoring meals
              </p><br />    
              </Animated>
              <p className="button"><a href="!#">DONATE NOW</a></p>
              </MDBMask>
          </MDBView>
        </header>

        <main>
         

          <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Upcoming Events</h1>
       <p style={{textAlign:'center'}}>Show your support in our events by donating</p>
       </div>
          <UpcomingEvents/>
        </main>
      </div>
    );
  }
}

export default EventPage;