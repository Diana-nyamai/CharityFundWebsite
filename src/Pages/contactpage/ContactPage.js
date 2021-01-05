import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';

class ContactPage extends React.Component {
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
                <strong>LOGO</strong>
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
          <MDBView src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>The  contact Page</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
        <div id="map-container-google-4" class="z-depth-1-half map-container-10" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7359864172404!2d35.28066581469809!3d-0.36808763541737993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a57399f1bda5b%3A0x70ee2b689e9303df!2sFaith%20Ministries%20Church%20International%20Office!5e0!3m2!1sen!2ske!4v1609154991727!5m2!1sen!2ske" width="100%" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    );
  }
}

export default  ContactPage;