import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import ContactUs from './ContactUs';

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
              <h2 style={{fontSize:'100px'}}>contact Us</h2>
              
            </MDBMask>
          </MDBView>
        </header>

        <main>
         <ContactUs/>
        </main>
        
      </div>
    );
  }
}

export default  ContactPage;