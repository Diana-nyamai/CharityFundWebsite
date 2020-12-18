import React from 'react'
import { NavBarData } from './NavBarData'


function NavBar() {
    return (
        <div>
            <div className="main-header">
             <div className="header-upper">
              <ul className="upper-ul">
              <li className="row">Call us:+254712 345 678</li>
              <li className="row">Email us:support@gmail.com</li>
              </ul>
             </div>
            <div className="header-lower">
              <ul>
              {
                  NavBarData.map((value, key) =>{
                      return(
                          <li key={key} className="row">
                          <div id="icon">{value.icon}</div>
                          <div id="title"> {value.title}</div>
                          </li>
                      )
                  })
              }
              </ul>
                
            </div>
            </div>
        </div>
    )
}

export default NavBar
