import React, { Component } from 'react'
import Timer from './Timer'


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
                <h4> January 2021 - Show some Love 2021</h4>
                <p>
This Year, Show some love by sponsoring meals.

<b> Ksh. 30 per adult daily </b> or
<b> Ksh 900 per adult monthly </b>
           
Ksh 30 per child daily or
Ksh 900 per child monthly</p>
                <Timer/>
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
                <h4> february 2021</h4>
                <p>Show some Love 2021
This Year, Show some love by sponsoring meals

<b> Kshs. 30 per adult daily </b> or
Ksh 900 per adult monthly 
           
Ksh 30 per child daily or
Ksh 900 per child monthly</p>
                <Timer/>
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
                <h4> march 2021</h4>
                <p>Show some Love 2021
This Year, Show some love by sponsoring meals 

<b>Kshs. 30 per adult daily </b> or
Ksh 900 per adult monthly 
           
Ksh 30 per child daily or
Ksh 900 per child monthly</p>
                <Timer/>
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
                <p>Show some Love 2021
This Year, Show some love by sponsoring meals

<b>Kshs. 30 per adult daily </b> or
Ksh 900 per adult monthly 
           
Ksh 30 per child daily or
Ksh 900 per child monthly</p>
                <Timer/>
                </div></div></div></div></div>
            </div>
        )
    }
}

export default UpcomingEvents
