/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const style = {
        div: css`
        width: 50%;
        margin: 0 auto;
        text-align: center;
        text-transform: uppercase;
        background-color: #ff4083;
        border-radius: 25px;
        color: #fff;
        `,
        p: css`
        padding: 0px 10px 10px 10px ;
        `
    }
    return ( 
        <div>
            <Navbar/>
    <div css={style.div}>
    <h1>main content</h1>
    <h2>Velkommen til skvatmiklerne!</h2>
    <p css={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad provident sapiente unde minus eligendi tempore dolorem reiciendis, est voluptatum, numquam necessitatibus. Dolorum exercitationem architecto, repellat tempore earum voluptates quam.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eius placeat eos at quas repellat facere odio voluptatibus excepturi consequuntur laborum optio labore suscipit ut officiis aut, enim non voluptate?
    </p>
</div>
</div>
     );
}
 
export default Home;