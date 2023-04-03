import{BrowserRouter,Routes,Route} from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Allfile } from './component/allfail';
// import { Home } from "./component/Home";
// import { Weekup } from './component/weekup';
// import { Gotto } from './component/get to more';
// import { Make } from './component/make';
// import { Transfers } from './component/Transfers';
// import { Teamwork } from './component/Teamwork';
// import { Smart } from './component/smart';

// import { Set } from './component/Set';
// import { Control } from './component/control';
// import { Makeyour } from './component/makeyour';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/'element={<Allfile/>}/>

       {/* <Route path='/' element={<Home/>}/>
       <Route path='/Weekup' element={<Weekup/>}/>
       <Route path='/Gotto' element={<Gotto/>}/>
       <Route path='/Make' element={<Make/>}/>
       <Route path='/Transfers' element={<Transfers/>}/>
       <Route path='/Teamwork' element={<Teamwork/>}/>
       <Route path='/Smart' element={<Smart/>}/>
       <Route path='/Set' element={<Set/>}/>
       <Route path='/Control' element={<Control/>}/>
       <Route path='/Makeyour' element={<Makeyour/>}/>
        */}


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
