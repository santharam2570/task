import React from "react";
import './Home.css';
import Group657 from './Group 657.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export function Smart(){
    return(
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-lg-1"></div>
            <div className="col-lg-6 bgclo mr-4">
                <h4 className="text-white">Smart company debit cards help <br/>you and your team go further   
                            Learn more about Cards</h4>
                <a className="text-primary">Learn more about Cards</a>
                <img src={Group657} className="col-lg-9 float-right pt-5"/>
            </div>
            <div className="col-lg-3 bgclo   text-light">
            <FontAwesomeIcon icon={faStar} className="text-light"/>
            <h4><b>Exchange,<br/>send and spend<br/>at great rates</b></h4>  
            <p className="text-success mar"><b>Explore Exchanges</b></p> 
            
            </div>
            </div>
            

        </div>
           
    );
}