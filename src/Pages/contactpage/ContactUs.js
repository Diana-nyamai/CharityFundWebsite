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
              <div className="form-header blue accent-1">
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
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6338605984747!2d36.73452031470259!3d-1.3961496361495398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05cbfac861ff%3A0x680b30b9f4644fd1!2sMaasai%20Lodge%20Rongai!5e0!3m2!1sen!2ske!4v1605682258469!5m2!1sen!2ske"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="pink" className="accent-1">
                <LocationOnIcon />
              </MDBBtn>
              <p>Nairobi, Kenya</p>
              
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="pink" className="accent-1">
                <PhoneIcon />
              </MDBBtn>
              <p>0101170937</p>
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
