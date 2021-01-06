import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import FeaturedCauses from './FeaturedCauses';
import UpcomingEvents from './UpcomingEvents';
import Volunteers from './Volunteers';
import BecomeVolunteer from './BecomeVolunteer';
import LatestNews from './LatestNews';

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
                    <Nav.Link href="/EventPage">Events</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/StoriesUntold">Stories Untold</Nav.Link>
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
              <h2 style={{fontSize:'100px'}}>HEALTHY MEALS </h2>
              <h2 style={{fontSize:'70'}}>fOR lOW INCOME EARNERS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5>Today in Kenya,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Food Security depends on whether households have stable incomes to afford food</p><br /></Animated>
              <p className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScElLmk-MuBzgNdWiY2LCdJ8W_kGeaseegRp4xT_GGGFRtylQ/viewform?usp=pp_url">JOIN US TODAY</a></p>
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
         <h4>Donation</h4>
         <img src="../Images/donate.png" alt="donate"/>
         <p>Any support towards getting foodstuffs for the low income homes
          and individuals is highly welcome.Donate to Amie Foundation
           through Lipa na MPESA 742676 (Buy Goods/ Services)
         </p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="causes"> 
         <h4>Partners</h4>
         <img src="../Images/partner.png" alt="donate"/>
         <p>Low income households and individuals have many essential needs beyond food that need to be met. 
         We’re always looking for partners that we can work with to meet them. (Partner with us)
         </p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="causes"> 
         <h4>Volunteer</h4>
         <img src="../Images/volunteer.png" alt="donate"/>
         <p>Amie Foundation brings together diverse skills-sets, 
         programs and activities to make the vision a reality. 
         You can volunteer in any of the areas in the website (Volunteer with us)
         </p>
         </div>
         </div>
 </div>

       {/*featured causes*/}
      <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Featured Causes</h1>
       <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
       
       <FeaturedCauses/>

       {/*Upcoming events*/}
       <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Upcoming Events</h1>
       <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
      <UpcomingEvents/>

       {/*Our volunteers */}
       <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Meet Our Volunteers and Team</h1>
       <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
       <Volunteers/>

       {/* become a volunteer*/}
       <BecomeVolunteer/>

       <div style={{paddingBottom:'2em'}}>
       <h1 style={{textAlign:'center'}}>Our Latest news</h1>
       <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
       <LatestNews/>
        </main>
      </div>
    );
  }
}

export default Homepage;