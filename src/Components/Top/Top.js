import Image from '../../assets/img/top2.webp'
import Styles from './top.module.css'; 

const Top = () =>{
    return(
      <img src={Image} alt="img" className={Styles.img}/> 
    )
}
export default Top;