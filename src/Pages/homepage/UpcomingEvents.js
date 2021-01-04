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
                <img className="img-fluid w-100" src="../Images/C1.jpg" alt="event"/>
                <div className="img-overlay"></div>
                </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="content_wrapper">
                <h1 className="title"> Help and homelessness</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et euismod mauris. 
                Ut eleifend egestas lorem, sit amet imperdiet</p>
                <div className="d-flex count_time"></div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default UpcomingEvents
