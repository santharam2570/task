import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



export function Weekup(){
    return(
        <>
        <div className="container-fluid col-lg-12">
            <div className="row justify-content-center">
                <div className="col-lg-5 text-black mt-5 ">
                    <h1><b>We keep your<br/> money safe</b></h1><br/>
                    <p className="keep__pera">Keep your money safe with our anti-fraud system. All our cards support 3D Secure and our contactless<br/> card limits help fight contactless fraud</p> 
                   <div className="row ml-1">
                   <button type="button" class="btn btn-success px-4">See how</button> 
                    <FontAwesomeIcon icon={faCirclePlay} className=" px-2 playicon"/>
                
                   </div>
                </div>

                <div className="col-lg-6">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 m-2 bg-grey p-3">
                                <h5><b>Card spending you control</b></h5>
                                    <p className="pera">You’re the boss. Set limits, track, freeze/unfreeze
                                        and decide where cards can be used. Expenses
                                        automatically remind staff to submit receipts; it’s
                                        bookkeeping made easy
                                    </p>
                                    <h6><b>Discover Expenses    <FontAwesomeIcon icon={faArrowRight} /></b></h6>

                            </div>
                            <div className="col-lg-5 m-2 bg-grey p-3">
                                <h5><b> Spend like a local on debit<br/> cards with great FX rates</b></h5>
                                    <p className="pera">You’re the boss. Set limits, track, freeze/unfreeze
                                        and decide where cards can be used. Expenses
                                        automatically remind staff to submit receipts; it’s
                                        bookkeeping made easy
                                    </p>
                                    <h6><b>Learn more about Exchanges <FontAwesomeIcon icon={faArrowRight} /></b></h6>

                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5 m-2 bg-grey p-3">
                                <h5><b>Stay secure online with
                                    virtual debit cards</b></h5>
                                    <p className="pera">Get added protection from online fraud with
                                        virtual cards - each team member can get up to
                                        200. Perfect for tracking subscriptions and other
                                        online payments
                                      
                                
                                    </p>
                                    <h6><b>Get started <FontAwesomeIcon icon={faArrowRight} /></b></h6>

                            </div>
                            <div className="col-lg-5 m-2  bg-grey p-3">
                                <h5><b>Empower your team with
                                        company debit cards</b></h5>
                                    <p className="pera">
                                    Empower your team with
                                    company debit cards
                                     However big or small your team is, our company
                                    cards have got you covered. Spend securely with
                                    physical and virtual debit cards that you control
                                    </p>
                                    <h6><b>Discover Expenses    <FontAwesomeIcon icon={faArrowRight} /></b></h6>

                            </div>
                        </div>
                    </div>
                
            </div>

        </div>
        </>
    );
}





 