import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer= () => {
  return (
    <MDBFooter color="pink" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Our Mission
            </h6>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Vestibulum et euismod mauris. Ut eleifend egestas lorem, 
            sit amet imperdiet augue pulvinar non. Quisque eu odio quis nisi molestie venenatis id eget mi.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
         
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Quick links
            </h6>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/EventPage">Events</a>
            </p>
            <p>
              <a href="/AboutPage">About Us</a>
            </p>
            <p>
              <a href="/ContactPage">Contact Us</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <HomeIcon/> Amie Foundation, on Kamiti Road, Opposite Jacaranda Gardens
            </p>
            <p>
              <EmailIcon /> info@amiefoundation.co.ke
            </p>
            <p>
              <PhoneIcon/> +254 706 151 716
            </p>
           
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
               All rights reserved
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a  href="!#" >
                    <TwitterIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a  href="!#" >
                    <FacebookIcon/>
                  </a>
                </li>
                <li className="list-inline-item">
                <a  href="!#" >
                  <InstagramIcon />
                </a>
              </li>
                <li className="list-inline-item">
                  <a href="!#" >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;