import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import FeaturedCauses from './FeaturedCauses';

class Homepage extends React.Component {
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
                <strong>lOGO</strong>
              </Navbar.Brand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <Nav.Link href="/">Home</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/EventPage">Event</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/AboutPage">About Us</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/ContactPage">Contact Us</Nav.Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBjaGFyaXR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 >GIVE A HAND</h2>
              <h2>TO MAKE A BETTER WORLD</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et euismod mauris.</h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Ut eleifend egestas lorem, sit amet imperdiet augue pulvinar non</p><br /></Animated>
              <Animated  animationIn="bounceInLeft"><p>Quisque eu odio quis nisi molestie venenatis id eget mi. Proin quam felis, consectetur ac ante ut, </p>
              </Animated>
              <p className="btn"><a href="!#">JOIN US TODAY</a></p>
            </MDBMask>
          </MDBView>
        </header>

        <main>
        <div style={{paddingBottom:'2em'}}>
         <h1 style={{textAlign:'center'}}>Our Major Causes</h1>
         <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
         <div className="row">
         <div className="col-lg-4 col-md-6">
         <div className="causes"> 
         <h4>Give Donation</h4>
         <img src="../Images/donate.png" alt="donate"/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et euismod mauris. Ut eleifend egestas lorem, sit amet imperdiet augue pulvinar non.</p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="causes"> 
         <h4>Give inspiration</h4>
         <img src="../Images/inspre.png" alt="donate"/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et euismod mauris. Ut eleifend egestas lorem, sit amet imperdiet augue pulvinar non.</p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="causes"> 
         <h4>Become a Volunteer</h4>
         <img src="../Images/volunteer.png" alt="donate"/>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et euismod mauris. Ut eleifend egestas lorem, sit amet imperdiet augue pulvinar non.</p>
         </div>
         </div>
 </div>

       {/*featured causes*/}
      <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Featured Causes</h1>
       <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
       
       <FeaturedCauses/>

       <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Featured Causes</h1>
       <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
      
        </main>
      </div>
    );
  }
}

export default Homepage;