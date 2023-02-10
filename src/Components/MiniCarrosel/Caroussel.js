import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import  Styles from "./caroussel.module.css";
import Banner1 from '../MiniCarrosel/assets/ATALHO-SERVICO-APP1-0009b0590dcb.webp'
import Banner2 from '../MiniCarrosel/assets/ATALHO-DESKAPP-7b90caccd9de.webp'
import Banner3 from '../MiniCarrosel/assets/ATALHO-SERVICO-ENTREGAEM3H-ac32d8fe0255.webp'
import Banner4 from '../MiniCarrosel/assets/novoIcone_mercado_home_250x340-aa594359344d.webp'
import Banner5 from '../MiniCarrosel/assets/VERAO-ATALHO-SERVICO-VERAO-8c4d404f433e.webp'
import Banner6 from '../MiniCarrosel/assets/ATALHO-SERVICO-CUPONERIA-3ce5a8f510ec.webp'
import Banner7 from '../MiniCarrosel/assets/ATALHO-SERVICO-OFERTASDODIA-d09d8f352ab9.webp'
import Banner8 from '../MiniCarrosel/assets/ATALHO-LEVEMAIS-7794518dcf59.webp'
import Banner9 from '../MiniCarrosel/assets/ATALHO-MARCAS-PROPRIAS-e3d0d854c620.webp'
import Banner10 from '../MiniCarrosel/assets/marcas_queridinhas-49b6b05f3320.webp'
import Banner11 from '../MiniCarrosel/assets/thumbnail_ATALHO-SERVICO-AME-desk-app-9997930fcfa0.webp'
import Banner12 from '../MiniCarrosel/assets/ATALHO-SERVICO-MUNDO-50851fa716a7.webp'

const banners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10, Banner11, Banner12];

function MiniCarousel() {
    
    const breakPoints = [{ width: 550, itemsToShow: 10, itemsToScroll: 12 }];

    const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((index + 1) % items.length);
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }, [index, items.length]);
    

    
    return (
      <div className={Styles.AppCarrouselMini}>
        <div className={Styles.carouselWrapper}>
          <Carousel 
                breakPoints={breakPoints}
                showArrows={true}
                pagination={false}
                enableAutoPlay={true}
                autoPlayInterval={3000} 
            >
            {items.map((item, index) => (
              <Card src={banners[index]} />
            ))}
          </Carousel>
        </div>
      </div>
    );
}

export default MiniCarousel;
