import axios from "axios";
import {useState} from 'react';

const Fetch = () => {
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
        <div>
        <button onClick={getQoute}>Get Qoute!</button>
        <p>{qoute}</p>
        </div>
     );
}
 
export default Fetch;