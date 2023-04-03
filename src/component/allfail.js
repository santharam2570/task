// import { Form } from "react-router-dom";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { Weekup } from './weekup';
import { Gotto } from './get to more';
import { Make } from './make';
import { Transfers } from './Transfers';
import { Teamwork } from './Teamwork';
import { Smart } from './smart';
import { Set } from './Set';
import { Control } from './control';
import { Makeyour } from './makeyour';



export function Allfile(){
    return(
        <>
        <Home/>
        <Weekup/>
        <Gotto/>
        <Make/>
        <Transfers/>
        <Teamwork/>
        <Smart/>
        <Set/>
        <Control/>
        <Makeyour/>
        </>
    );

}
