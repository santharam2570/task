import React from "react";
import './Home.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frome from './Frame.png';
import Group from './Group.png';

export function Transfers(){
    return(
        <>
        {/* <div className="container col-lg-12">
            <div className="bg-dark bord p-5">
                <div className="row">
                <div className="col-lg-1"></div>
                    <div className="col-lg-4 text-light p-5">
                        
                        <p>Transfers</p>
                        <h1>International</h1>
                        <h1>payments for</h1>
                        <h1>your business</h1><br/>
                        <p>Join thousands of businesses saving on<br/>fees with fast local and international<br/>transfers</p><br/>
                        <button type="button" class="btn btn-success px-4">Get started</button>

                        <button type="button" class="btn text-white mx-4 px-4">Get started</button> 
                        
                    </div>
                    
                <div className="col-lg-4 bgclo m-5">
                </div>

                </div>

            </div>
            
        </div> */}

        <div className="container-fluid col-lg-12 p-5">
           <div className="bg-dark text-light bord">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4 text-light p-5">
                        
                        <p>Transfers</p>
                        <h1>International</h1>
                        <h1>payments for</h1>
                        <h1>your business</h1><br/>
                        <p>Join thousands of businesses saving on<br/>fees with fast local and international<br/>transfers</p><br/>
                        <button type="button" class="btn btn-success px-4">Get started</button>

                        <button type="button" class="btn text-white mx-4 px-4">Contact sales</button> 
                        
                    </div>
                    <div className="col-lg-4 bgclo m-5">
                    </div>
                   
                </div>
               
           </div>
           

        </div>
        </>
    );
}
