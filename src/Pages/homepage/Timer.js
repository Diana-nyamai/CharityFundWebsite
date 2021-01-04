import React, { Component } from 'react'

export class Timer extends Component {
    
    render() {
        return (
            <div className="d-flex count_time" id="clockdiv1">
                <div className="mr-5" >
                <h4 class="days">300</h4>
                <p>Days </p>
                </div>

                <div className="mr-5" >
                <h4 class="days">16</h4>
                <p>Hour</p>
                </div>
                <div className="mr-5">
                <h4 class="days">30</h4>
                <p>Min</p>
                </div>
                <div className="mr-5">
                <h4 class="days">20</h4>
                <p>Secs</p>
                </div>
            </div>
        )
    }
}

export default Timer
