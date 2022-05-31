/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { Link } from "react-router-dom";
const Navbar = () => {
    const style = {
        navbar: css`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #ff4083;
        color: #fff;
        width: 50%;
        margin: 0 auto;
        font-size: 1.5em;
        border-radius: 0px 0px 25px 25px;
        height: 2em;
        `,
        aTag: css`
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
        &:hover{
            color: black;
        }
        `
    }
    return (
        <div>
        <nav css={style.navbar}>
        <Link to="/" css={style.aTag}>Front</Link>
        <Link to="/Home" css={style.aTag}>Main</Link>
        <Link to="/About" css={style.aTag}>About</Link>
        
        </nav> 
        </div>
     );
}
 
export default Navbar;