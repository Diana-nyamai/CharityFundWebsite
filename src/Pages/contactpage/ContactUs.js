import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput } from "mdbreact";
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

export class ContactUs extends Component {
    render() {
        return (
            <section className="my-5">
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header pink accent-2">
                <h3 className="mt-2">
                  <EmailIcon/> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We will write back within 24hrs
              </p>
              <div className="md-form">
                <MDBInput
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              
              <div className="text-center">
                <MDBBtn color="pink">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7" >
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" ,overflowY:'hidden'}}
          >
         
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9575200112636!2d36.88923741475379!3d-1.1902003991318628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTEnMjQuNyJTIDM2wrA1MycyOS4xIkU!5e0!3m2!1sen!2ske!4v1611049571432!5m2!1sen!2ske"
              title="Amie Foundation location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              aria-hidden="false" tabindex="0"
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="pink" className="accent-1">
                <LocationOnIcon />
              </MDBBtn>
              <p>Nairobi, </p>
              
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="pink" className="accent-1">
                <PhoneIcon />
              </MDBBtn>
              <p>+254 706 151 716</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="pink" className="accent-1">
                <EmailIcon/>
              </MDBBtn>
              <p>info@amiefoundation.co.ke</p>

            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <div style={{paddingBottom:'2em'}}>
     
      
      </div>
    </section>
        )
    }
}

export default ContactUs
