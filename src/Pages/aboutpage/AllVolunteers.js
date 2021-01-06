import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


export class AllVolunteers extends Component {
    render() {
        return (
            <div className="row team_inner">
                <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/wairimu.jpeg" alt="C1"/>
                <div className="team-name">
                  <h4>Wairimu Ngungu</h4>
                  <p>Founder, Manager</p>
                  <p className="mt-20">As the Founder and the first volunteer at Amie,
                   Wairimu holds multiple qualifications in aviation and finance.
                   Empowering communities is her heart beat.</p>
                  <div className="social">
                  <i className="icons"><FacebookIcon/></i>
                  <i className="icons"><InstagramIcon/></i>
                  <i className="icons"><LinkedInIcon/></i>
                 <i className="icons"><TwitterIcon/></i>
                  </div> </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/alex.png" alt="C1"/>
                <div className="team-name">
                  <h4>Liwali Kivumanyuki</h4>
                  <p>Volunteer</p>
                  <p className="mt-20">An entrepreneur that loves volunteering with Amie on management and strategic plans<br/></p>
                  <div className="social">
                  <i className="icons"><a href="https://www.facebook.com/liwali.kivumanyuki/"><FacebookIcon/></a></i>
                  <i className="icons"><InstagramIcon/></i>
                  <i className="icons"><a href=" https://www.linkedin.com/in/alex-kamanga/"><LinkedInIcon/></a></i>
                  <i className="icons"><TwitterIcon/></i>
                  </div> </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/sly.png" alt="C1"/>
                <div className="team-name">
                  <h4>Sylviah Wambui</h4>
                  <p>Volunteer</p>
                  <p className="mt-20">A Legal and Criminology expert who has a passion for building 
                  solutions that make the lives of people better.</p>
                  <div className="social">
                  <i className="icons"><FacebookIcon/></i>
                  <i className="icons"><InstagramIcon/></i>
                  <i className="icons"><a href="https://www.linkedin.com/in/sylviah-wambui-mwitumi/"><LinkedInIcon/></a></i>
                  <i className="icons"><a href="https://twitter.com/SMwitumi"><TwitterIcon/></a></i>
                  </div> </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/lillian.png" alt="C1"/>
                <div className="team-name">
                  <h4>Lillian Wachira</h4>
                  <p>Volunteer</p>
                  <p className="mt-20">An enthusiastic girl who loves baking and cherishes every joyful moment with others.</p>
                  <div className="social">
                  <i className="icons"><a href="!#"><FacebookIcon/></a></i>
                  <i className="icons"><a href="!#"><InstagramIcon/></a></i>
                  <i className="icons"><a href="!#"><LinkedInIcon/></a></i>
                  <i className="icons"><a href="!#"><TwitterIcon/></a></i>
                  </div> </div> </div></div></div>


                   <div className="col-lg-3 col-md-6">
                    <div className="team-item">
                    <div className="team-img">
                    <img className="img-fluid" src="../Images/diana.png" alt="C1"/>
                    <div className="team-name">
                      <h4>Diana Nyamai</h4>
                      <p>Tech</p>
                      <p className="mt-20">A budding software developer who puts her time with Amie in technological design and maintenance</p>
                      <div className="social">
                      <i className="icons"><a href="!#"><FacebookIcon/></a></i>
                      <i className="icons"><a href="!#"><InstagramIcon/></a></i>
                      <i className="icons"><a href="!#"><LinkedInIcon/></a></i>
                      <i className="icons"><a href="!#"><TwitterIcon/></a></i>
                      </div> </div> </div></div></div>
            </div>
        )
    }
}

export default AllVolunteers
