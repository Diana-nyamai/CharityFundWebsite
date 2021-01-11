import React, { Component } from 'react'

export class Timer extends Component {
   state = {
      days: 300,
      hour: 20,
      min: 30,
      sec: 0
   }

   componentDidMount() {
       this.myInterval = setInternal(() =>{
           const { sec, min } = this.state

           if( sec > 0){
               this.setState(({sec}) => ({
                   sec: sec - 1
               }))
           }
       })
   }

    render() {
        return (
            <div className="d-flex count_time" id="clockdiv1">
                <div className="Days" >
                <h4 class="days">300</h4>
                <p>Days </p>
                </div>

                <div className="Days">
                <h4 class="days">16</h4>
                <p>Hours</p>
                </div>
                <div className="Days">
                <h4 class="days">30</h4>
                <p>Minutes</p>
                </div>
                <div className="Days">
                <h4 class="days">20</h4>
                <p>Seconds</p>
                </div>
            </div>
        )
    }
}

export default Timer
