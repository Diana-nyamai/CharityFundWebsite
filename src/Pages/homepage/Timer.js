import React, { Component } from 'react'

export class Timer extends Component {
    
    render() {
        return (
            <div className="d-flex count_time">
                <div className="mr-25">
                <h4 class="days">300</h4>
                <p>Days </p></div>

                <div className="mr-25">
                <h4 class="days">16</h4>
                <p>Hours</p></div>
                <div className="mr-25">
                <h4 class="days">30</h4>
                <p>Minutes</p></div>
                <div className="mr-25">
                <h4 class="days">20</h4>
                <p>Seconds</p>
                </div>
            </div>
        )
    }
}

export default Timer
