import React, { Component } from 'react'



export class UpcomingEvents extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                <div className="event">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                <figure>
                
                <div className="img-overlay" style={{borderRadius:'5px'}}>
                <img className="img-fluid w-100" src="../Images/event1.jpeg" alt="event"/></div>
                </figure>
                </div>
                <div className="col-lg-6 col-md-6" >
                <div className="content_wrapper">
                <h4> January 2021 </h4>
                <p>Show some Love 2021
This Year, Show some love by sponsoring meals.

<b> Ksh. 30 per adult daily </b> or
<b> Ksh 900 per adult monthly </b>
           
Ksh 30 per child daily or
Ksh 900 per child monthly</p>
                
                </div></div></div></div></div>

                <div className="col-lg-6">
                <div className="event">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                <figure>
                
                <div className="img-overlay" style={{borderRadius:'5px'}}>
                <img className="img-fluid w-100" src="../Images/event2.jpeg" alt="event"/></div>
                </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="content_wrapper">
                <h4> February 2021</h4>
                <p>Be part of our community outreach. Join us as we identify and 
                collaborate with partners that serve different needs in low income areas</p>
                
                </div></div></div></div></div>

                <div className="col-lg-6">
                <div className="event">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                <figure>
                
                <div className="img-overlay" style={{borderRadius:'5px'}}>
                <img className="img-fluid w-100" src="../Images/event3.png" alt="event"/></div>
                </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="content_wrapper">
                <h4> March 2021 - Sponsor a Skill</h4>
                <p> This month,  you can sponsor a skill or volunteer to teach a useful skill</p>
                
                </div></div></div></div></div>

                <div className="col-lg-6">
                <div className="event">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                <figure>
                
                <div className="img-overlay" style={{borderRadius:'5px'}}>
                <img className="img-fluid w-100" src="../Images/event4.jpeg" alt="event"/></div>
                </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="content_wrapper">
                <h4> April 2021</h4>
                <p>Volunteer to teach Trade skills.  This month,  you can sponsor or volunteer to 
                teach useful business skills to owners of small businesses in low income areas</p>
                
                </div></div></div></div></div>
            </div>
        )
    }
}

export default UpcomingEvents
