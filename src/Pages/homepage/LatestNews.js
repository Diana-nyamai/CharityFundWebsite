import React from 'react'
import TodayIcon from '@material-ui/icons/Today';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function LatestNews() {
    return (
      <div className="row">
      <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
      <div  className="blog-item-wrapper">
      <div className="blog-item-img">
      <a href="!#">
      <img style={{borderRadius:'5px'}} className="img-fluid w-100" src="../Images/food1.jpeg" alt="blog"/>
      </a>
      </div>
      <div className="blog-item-text">
      <div className="date">
        <TodayIcon/> january 15, 2021
      </div>
        <p><a href="!#"  style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Phasellus at nibh efficitur, vulputate sapien vehicula, iaculis lorem
        </a></p>
        <div className="date">
         <AccessTimeIcon/> 5 mins read
        </div></div></div> </div>
      
        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
      <div  className="blog-item-wrapper">
      <div className="blog-item-img">
      <a href="!#">
      <img style={{borderRadius:'5px'}} className="img-fluid w-100" src="../Images/food2.png" alt="blog"/>
      </a>
      </div>
      <div className="blog-item-text">
      <div className="date">
        <TodayIcon/> january 15, 2021
      </div>
        <p><a href="!#"  style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Phasellus at nibh efficitur, vulputate sapien vehicula, iaculis lorem
        </a></p>
        <div className="date">
         <AccessTimeIcon/> 5 mins read
        </div></div></div> </div>

        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
      <div  className="blog-item-wrapper">
      <div className="blog-item-img">
      <a href="!#">
      <img style={{borderRadius:'5px'}} className="img-fluid w-100" src="../Images/food3.jpeg" alt="blog"/>
      </a>
      </div>
      <div className="blog-item-text">
      <div className="date">
        <TodayIcon/> january 15, 2021
      </div>
        <p><a href="!#"  style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Phasellus at nibh efficitur, vulputate sapien vehicula, iaculis lorem
        </a></p>
        <div className="date">
         <AccessTimeIcon/> 5 mins read
        </div></div></div> </div>

        
     
      
      </div>
    )
}

export default LatestNews
