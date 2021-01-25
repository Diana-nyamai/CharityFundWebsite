import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router ,NavLink} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import AllVolunteers from './AllVolunteers';

class AboutPage extends React.Component {
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
                    <Nav.Link  eventKey={1} href="/">Home</Nav.Link>
                  </MDBNavItem>
                   <MDBNavItem active>
                    <Nav.Link  eventKey={2} activeClassName="selectedLink" to="/AboutPage">About Amie</Nav.Link>
                  </MDBNavItem> 
                  <MDBNavItem>
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
          <MDBView src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBjaGFyaXR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig"> <h2 style={{fontSize:'100px'}}>About Amie</h2></Animated>
              
            </MDBMask>
          </MDBView>
        </header>

        <main>
              <div className="container">
              <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="condition-left"> 
              <img className="img-fluid" style={{marginTop:'80px'}} src="../Images/aboutus.jpeg"  alt="about"/>
              </div>
              </div>
              <div className="offset-lg-1 col-lg-5">
              <div className="condition-right">
              <h2>About Amie</h2>
                <p align="justify" style={{fontSize:'20px', color:'black'}}>Translated, Amie means a female friend. 
            Our Foundation exists to be a friend to the vulnerable of all 
            kinds in our Kenyan society today. Our programs aim to improve the quality 
            of people’s lives. Hunger is the problem we’re tackling for a start. With time, 
            we hope to solve more problems for Kenya’s low income earners.</p>
              </div>
              </div>
              </div>
</div>
          <MDBContainer className="text-center my-5">
          
          </MDBContainer>

          <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Meet Our Volunteers and Team</h1>
       <p style={{textAlign:'center'}}>The members participated in the success of the Foundation</p>
       </div>

       <AllVolunteers/>
        </main>
      </div>
    );
  }
}

export default AboutPage;