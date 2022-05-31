import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import axios from "axios";
import {useState} from 'react'
function App() {
  const [qoute, setQoute] = useState('')
  const getQoute = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQoute(res.data.content)
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div className="wrapper">
    <Navbar/> 
     <div>
       <Outlet/>
     </div>
     <button onClick={getQoute}>klik</button>
     <p>{qoute}</p>
    </div>
   
  );
}

export default App;
