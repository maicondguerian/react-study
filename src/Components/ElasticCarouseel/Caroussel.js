import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "./styles.css";
import Banner from './assets/banner1.webp'
import Banner2 from './assets/banner2.webp'
import Banner3 from './assets/banner3.webp'
import Banner4 from './assets/banner4.webp'
import Banner5 from './assets/banner5.webp'
import Banner6 from './assets/banner6.jpg'
import Banner7 from './assets/banner7.webp'
import Banner8 from './assets/newbanner.webp'

const BannerBottom =()=>{

    return <img src={Banner8} className='BannerBottom' />
}


function NewCarousel(){
    
    return (
        <div >
            <Carousel  
                enableAutoPlay={true}
                autoPlaySpeed={5000}
                transitionMs={1000}
                responsive={true}
                enableSwipe={false}
                >
                <Card  src={Banner}/>
                <Card  src={Banner2}/>
                <Card  src={Banner3}/>
                <Card  src={Banner4}/>
                <Card  src={Banner5}/>
                <Card  src={Banner6}/>
                <Card  src={Banner7}/>
            </Carousel>
            <BannerBottom/>
        </div>
    )
}
export default NewCarousel;

