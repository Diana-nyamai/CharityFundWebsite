import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import LatestNews from '../homepage/LatestNews';


class StoriesUntold extends React.Component {
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
                   <MDBNavItem >
                    <Nav.Link href="/AboutPage">About Amie</Nav.Link>
                  </MDBNavItem> 
                  <MDBNavItem active>
                  <Nav.Link href="/StoriesUntold">Stories Untold</Nav.Link>
                </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/EventPage">Events</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="/ContactPage">Contact Us</Nav.Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <MDBView src="../Images/storyuntold.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig"> <h2 style={{fontSize:'100px'}}>STORIES UNTOLD</h2></Animated>
              
            </MDBMask>
          </MDBView>
        </header>

        <main>
        <div style={{paddingBottom:'2em'}}>
        <h1 style={{textAlign:'center'}}>Our Latest News</h1>
        <p style={{textAlign:'center'}}>Love reading?take a look at our latest blogs feeds</p>
        </div>
          <LatestNews/> 
        </main>
      </div>
    );
  }
}

export default StoriesUntold;