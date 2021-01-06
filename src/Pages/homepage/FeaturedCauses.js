import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdbreact';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const FeaturedCauses = () => {
  return (
    <MDBRow style={{padding:'20px'}}>
      <MDBCol md='4'style={{paddingBottom:'30px'}}>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='../Images/C1.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Education for every child</strong>
            </MDBCardTitle>

           

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>
          <div className="d-flex justify-content-between raised_goal">
          <p>Daily: ksh.30</p>
          <p style={{color:' #e91e63'}}>Monthly: ksh.900</p>
          </div>
          
          <div className="d-flex justify-content-between donation align-items-center">
          <MDBBtn color='pink'>Donate</MDBBtn>
          <p><FavoriteBorderIcon/>90 Donors</p>
          </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4' style={{paddingBottom:'30px'}}>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='../Images/C2.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Feeding the hungry</strong>
            </MDBCardTitle>

        

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <div className="d-flex justify-content-between raised_goal">
            <p>Daily: ksh.30</p>
            <p style={{color:' #e91e63'}}>Monthly: ksh.900</p>
            </div>

            <div className="d-flex justify-content-between donation align-items-center">
          <MDBBtn color='pink'>Donate</MDBBtn>
          <p><FavoriteBorderIcon/>90 Donors</p>
          </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <MDBCol md='4' style={{paddingBottom:'30px'}}>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='../Images/C1.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Providing clothes</strong>
            </MDBCardTitle>

            

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <div className="d-flex justify-content-between raised_goal">
            <p>Daily: ksh.30</p>
            <p style={{color:' #e91e63'}}>Monthly: ksh.900</p>
            </div>

            <div className="d-flex justify-content-between donation align-items-center">
          <MDBBtn color='pink'>Donate</MDBBtn>
          <p><FavoriteBorderIcon/>90 Donors</p>
          </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default FeaturedCauses;