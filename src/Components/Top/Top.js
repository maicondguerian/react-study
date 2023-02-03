import Image from '../../assets/img/top.webp'
import Styles from './top.module.css'; 

const Top = () =>{
    return(
       <>
        <div className="top-header">
         <img src={Image} alt="img" className={Styles.img}/> 
       </div>
       </>
    )
}
export default Top;