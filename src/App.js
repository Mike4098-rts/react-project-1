import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

import Fetch from "./components/Fetch";

function App() {
  
  return (
    <div className="wrapper">
    <Navbar/> 
     <div>
       <Outlet/>
     </div>
    <Fetch/>
    </div>
  );
}

export default App;
