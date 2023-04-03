import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Home.css';

export function Navbar(){
    return(
        <>
  <div className='container-fluid col-lg-6 navbg'>
<div classname='row'>
     

   <nav class="navbar navbar-expand-lg navbar-light bg-black nav">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-expanded="false"> Features </a>
        <div class="dropdown-menu  bg-lighttext-light">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Details</a>
          <a class="dropdown-item" href="#">Add</a>
        </div>
      </li>

      <li class="nav-item ">
        <a class="nav-link text-light" href="#">Pricing</a>
      </li>
     
      <li class="nav-item ">
        <a class="nav-link text-light" href="#">Help</a>
      </li>

      <li class="nav-item">
        <a class="nav-link text-light" href="#">Eng</a>
      </li>

      
  </ul>
  </div>
</nav>
</div>
  </div>



   </>
)
}
