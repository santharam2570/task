import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Home.css';
import propertyimg from './Propertyimg.png';

export function Home(){
    return(
        <>
        
        <div className='container-fluid col-lg-12 bgimg'>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className='col-lg-1'>&nbsp;</div>
  <a className="navbar-brand text-light" href="#">Univers</a>
  <a className="navbar-brand button " href="#"><button className='personalbut'>Personal</button></a>
  <a className="navbar-brand text-light" href="#">Business</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className='col-lg-5'>&nbsp;</div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-expanded="false"> Features </a>
        <div class="dropdown-menu  bg-lighttext-light">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Details</a>
        </div>

      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Pricing</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link text-light disabled" href="#">Help</a>
      </li>
      <li className='nav-item'>
      <a className="navbar-brand text-light" href="#"> En</a>
      </li>
    </ul>
    
  </div>
</nav>



<div className='row'> 
                 <div className='col-lg-6'> 
                     <h1 className='mt-5 p-5 text-light'>Digitize your<br/>univers bank</h1> 
                 </div> 
                 <div className='col-lg-6'> 
                     <h5 className='mt-4 p-5 text-light'>Money should be easy,it is time to say<br/>goodbye to banks & financial services<br/>companies that don't work for you</h5> 
                </div> 
                <div className='col-lg-2'> &nbsp; 
  
                </div> 

               
   <button className='digbut p-3 pl-3 pr-4 '><b>Digitize Now</b></button> 

                <div className='col-lg-8'>  
                <img src={propertyimg} className='col-lg-12 propertyimg'/> 
  
                </div> 
                <div className='col-lg-2'> &nbsp; 
                </div>    
             </div>


     




        </div>
        </>
    );
}