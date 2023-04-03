import React from "react";
import './Home.css';

export function Gotto(){
    return(
        <>
        <div className="container-fluid col-lg-12">
            <div className="row p-5">
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <h1><b>Get to know more<br/>about Univers</b></h1>
                </div>
                <div className="col-lg-4 ">
                    <p className="keep__pera">We are customer - focused digital bank that<br/>provides complete financial solutions to meet<br/>your entire financial needs</p>
                </div>  
                <div className="col-lg-2"></div>  
            </div>   
        </div>
            <div className="container-fluid ">
                <div className="row justify-content-center">
                    <div className="col-lg-3 p-5 m-2 bg-grey text-center">
                        <h1><b>250K</b></h1>
                        <h5>Univers’s from all<br/>over the globe</h5>
                    </div>
                    <div className="col-lg-3 p-5 m-2 bg-grey text-center">
                        <h1><b>500M</b></h1>
                        <h5> Univers’s revenue in 2022<br/>in the first quarter</h5>
                    </div>
                    <div className="col-lg-3 p-5 m-2 bg-grey text-center">
                        <h1><b>280%</b></h1>
                        <h5>Univers’s investment<br/>growth in 2023</h5>
                    </div>


                </div>
            </div>
        </>
    );
}