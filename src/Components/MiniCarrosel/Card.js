import React from "react";
import Styles from './caroussel.module.css'



const Cards = ({ src , style}) =>{
    return(
        <>
        <div className={Styles.card}>
            <img src={src} style={{}}/>
            
        </div>
        
        
        </>
    )
}

export default Cards;