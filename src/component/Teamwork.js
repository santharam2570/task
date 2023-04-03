import React from "react";
import './Home.css'
import Group from './Group 644.png';
import Group23 from './Group 23.png';




export function Teamwork(){
return(
    <>
    <div className="container-fluid bg-dark text-light">
        <h4 className=" text-center p-5">Teamwork makes the dream work</h4>
        <h1 className="text-center  ">Discover the meaning of efficiency <br/>with Univers Business</h1>
        <div className="row ">
            <div className="col-lg-1"></div>
            <div className="col-lg-4  col-10 bgcolT text-dark m-5 p-3">
                <h4 >Send and receive<br/>without borders</h4>
                <p><b>Explore Payments</b></p>
                <img src={Group}  className=""/>

            </div>
           
            <div className="col-lg-4 col-10 bgclo text-light m-5 p-3">
                <h4 >Invoices that work smarter</h4>
                <p className="text-success"><b>Learn more about Invoices</b></p>
                <img src={Group23} className="col-lg-12"/>
            </div>
            <div className="col-lg-1"></div>
        </div>

    </div>
    
    </>
);
}