import React from 'react'

function LatestNews() {
    return (
      <div className="row">
      <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
      <div  className="blog-item-wrapper">
      <div className="blog-item-img">
      <a href="">
      <img style={{borderRadius:'5px'}} className="img-fluid w-100" src="../Images/C1.jpg" alt="blog"/>
      </a>
      </div>
      <div className="blog-item-text">
      <div className="date">
         january 15, 2021
      </div>
        <p><a href=""  style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></p>
      </div>
      </div>
      </div>
      
      </div>
    )
}

export default LatestNews
