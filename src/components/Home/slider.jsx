/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import {Fade} from 'react-slideshow-image'
const ImgSlider = () => {
    const fadeimages = [
        "https://images.unsplash.com/photo-1606764765380-105d13e2918b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwbmlnaHR8ZW58MHx8MHx8&w=1000&q=80",
        "https://i.pinimg.com/736x/5f/2d/22/5f2d22ca016fc52aae68c1035bf9f875.jpg",
        "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwbmlnaHR8ZW58MHx8MHx8&w=1000&q=80"

    ]
    const style = {
        img: css`
        width: 200px;
        height: 200px;
        `
    }
    return ( 
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <img src={fadeimages[0]} alt="" css={style.img}/>
                </div>
                <div className="each-fade" >
                    <img src={fadeimages[1]} alt="" css={style.img}/>
                </div>
                <div className="each-fade" >
                    <img src={fadeimages[2]} alt="" css={style.img}/>
                </div>
            </Fade>
        </div>
     );
}
 
export default ImgSlider;