import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    
    <div className="wrapper">
    <Navbar/> 
    
     <div>
       <Outlet/>
     </div>
     
    </div>
   
  );
}

export default App;
