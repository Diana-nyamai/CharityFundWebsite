import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


export class Volunteers extends Component {
    render() {
        return (
            <div className="row team_inner">
                <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/C1.jpg" alt="C1"/>
                <div className="team-name">
                  <h4>Wairimu</h4>
                  <p>Manager</p>
                  <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="social">
                  <i className="icons"><a href="!#"><FacebookIcon/></a></i>
                  <i className="icons"><a href="!#"><InstagramIcon/></a></i>
                  <i className="icons"><a href="!#"><LinkedInIcon/></a></i>
                 <i className="icons"><a href="!#"><TwitterIcon/></a></i>
                  </div> </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/C1.jpg" alt="C1"/>
                <div className="team-name">
                  <h4>Alex Kamanga</h4>
                  <p>Volunteer</p>
                  <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="social">
                  <i className="icons"><a href="https://www.facebook.com/liwali.kivumanyuki/"><FacebookIcon/></a></i>
                  <i className="icons"><InstagramIcon/></i>
                  <i className="icons"><a href=" https://www.linkedin.com/in/alex-kamanga/"><LinkedInIcon/></a></i>
                  <i className="icons"><TwitterIcon/></i>
                  </div> </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/C1.jpg" alt="C1"/>
                <div className="team-name">
                  <h4>Sylviah Mwitumi</h4>
                  <p>Volunteer</p>
                  <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="social">
                  <i className="icons"><FacebookIcon/></i>
                  <i className="icons"><InstagramIcon/></i>
                  <i className="icons"><a href="https://www.linkedin.com/in/sylviah-wambui-mwitumi/"><LinkedInIcon/></a></i>
                  <i className="icons"><a href="https://twitter.com/SMwitumi"><TwitterIcon/></a></i>
                  </div> </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../Images/C1.jpg" alt="C1"/>
                <div className="team-name">
                  <h4>Alex</h4>
                  <p>Volunteer</p>
                  <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

export default Volunteers
