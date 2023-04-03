import React from "react";
import './Home.css';
import { Navbar } from "./Nav bar";


export function Makeyour(){
    return(
        <>

        <div className='container-fluid col-lg-12'>
            <h4 className='text-secondary text-center p-3'>What are you waiting for?</h4>
            <h1 className='text-dark text-center head'>Make your Business<br/>spending smarter</h1>
            <div className="text-center">

            <button className='trybut text-center text-dark mt-3 p-2'><b>Try Revolt business now</b></button>
            <button className='text-dark  p-2 ml-2 mt-3 sales'><b>Contact sales</b></button>
            </div>
        </div>
        
        <div className='col-lg-2'>&nbsp;</div>
        <div className='col-lg-2'>&nbsp;</div>

        <div className='container col-lg-8 bgconnect'>
            <h1 className='text-light head2 text-center pt-4'> Connect your finance<br/>with Carty</h1>
            <button className='try text-dark mt-5 pl-5 pr-5 pt-2 pb'><b>Rejoignez I'univers</b></button>
            
          
            <div className='last'>
                
                <Navbar/></div>

                <div className='row '>
            <button className='text-dark lastbut mb-4 ml-4 '>Personal</button>
            <h6 className='text-light ml-3 '>Business</h6>
        </div></div>
        
        
        </>
    );
}