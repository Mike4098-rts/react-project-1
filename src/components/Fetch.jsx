/** @jsxImportSource @emotion/react */
import axios from "axios";
import {useState} from 'react';
import { css } from "@emotion/react";

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
    const style = {
        divQoute: css`
            width: 50%;
            background-color: #ff4083;
            margin: 20px auto;
            border-radius: 25px;
            text-align: center;
            font-size: 2em;
        `,
        p: css`
        padding: 0px 10px 10px 10px ;
        `,
        btn: css`
            border: none;
            background-color: #f59cbb;
            border-radius: 25px;
            font-size: 1em;
            padding: 10px 20px 10px 20px;
            
        `
    }
    return ( 
        <div css={style.divQoute}>
            <h1>Click for a Qoute!</h1>
        <button onClick={getQoute} css={style.btn}>Get Qoute!</button>
        <p css={style.p}>{qoute}</p>
        </div>
     ); 
}
 
export default Fetch;