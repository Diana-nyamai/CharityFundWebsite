import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router} from 'react-router-dom';
import {Carousel,} from 'react-bootstrap';
import {Nav,Navbar} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import UpcomingEvents from './UpcomingEvents';
import Volunteers from './Volunteers';
import BecomeVolunteer from './BecomeVolunteer';
import LatestNews from './LatestNews';
import { LinkContainer } from 'react-router-bootstrap';


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
               <img src="../Images/logo.png" alt="logo"/>
              </Navbar.Brand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                  <LinkContainer to="/">
                    <Nav.Link href="/" >Home</Nav.Link>
                    </LinkContainer>
                  </MDBNavItem>
                  <MDBNavItem>
                  <LinkContainer to="/AboutPage">
                    <Nav.Link href="/AboutPage">About Amie</Nav.Link>  
                  </LinkContainer>
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

          <Carousel>
          

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing1.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>HEALTHY MEALS </h2>
              <h2 className="head2" style={{fontSize:'70'}}>FOR lOW INCOME EARNERS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Today in Kenya,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Food security depends on whether households have stable incomes to afford food</p><br /></Animated>
              <p className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScElLmk-MuBzgNdWiY2LCdJ8W_kGeaseegRp4xT_GGGFRtylQ/viewform?usp=pp_url">JOIN US TODAY</a></p>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing2.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>HEALTHY MEALS </h2>
              <h2 className="head2" style={{fontSize:'70'}}>FOR lOW INCOME EARNERS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Today in Kenya,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Food security depends on whether households have stable incomes to afford food</p><br /></Animated>
              <p className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScElLmk-MuBzgNdWiY2LCdJ8W_kGeaseegRp4xT_GGGFRtylQ/viewform?usp=pp_url">JOIN US TODAY</a></p>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing3.jpeg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}} >HEALTHY MEALS </h2>
              <h2 className="head2" style={{fontSize:'70'}}>FOR lOW INCOME EARNERS</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Today in Kenya,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p>Food security depends on whether households have stable incomes to afford food</p><br /></Animated>
              <p className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScElLmk-MuBzgNdWiY2LCdJ8W_kGeaseegRp4xT_GGGFRtylQ/viewform?usp=pp_url">JOIN US TODAY</a></p>
            </MDBMask>
          </MDBView></Carousel.Item>

         
          
          </Carousel>

          
        </header>


        {/*main content*/}
        <main>
        <div style={{paddingBottom:'1em'}}>
         <h1 style={{textAlign:'center'}}>Our Major Causes</h1>
         <p style={{textAlign:'center'}}>What we major on</p>
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


       {/*Upcoming events*/}
       <div style={{paddingBottom:'1em'}}>
       <h1 style={{textAlign:'center'}}>Upcoming Events</h1>
       <p style={{textAlign:'center'}}>Show your support in our events by donating</p>
       </div>
      <UpcomingEvents/>

       {/*Our volunteers */}
       <div style={{paddingBottom:'1em'}}>
       <h1 style={{textAlign:'center'}}>Meet Our Volunteers and Team</h1>
       <p style={{textAlign:'center'}}>The members participated in the success of the Foundation</p>
       </div>
       <Volunteers/>

       {/* become a volunteer*/}
       <BecomeVolunteer/>

       {/*Our latest News*/}
       <div style={{paddingBottom:'1em'}}>
       <h1 style={{textAlign:'center'}}>Stories Untold</h1>
       <p style={{textAlign:'center'}}>Love reading?take a look at our latest blogs feeds</p>
       </div>
       <LatestNews/>
        </main>
      </div>
    );
  }
}

export default Homepage;