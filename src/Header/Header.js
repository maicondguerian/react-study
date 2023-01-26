import logo from '../assets/img/logo.png'
import styles from './Header.module.css'
import { FaSearch } from "react-icons/fa";

function Header ({ text = "", Icon, customStyle, isUpperCase=false, iconSize=20, fontSize=16, iconColor }){

    return (
     <>
     <div>
        <nav>
            <img src={logo} alt="logo" width="163" height="32" className={styles.img}/>
                
             
        
           
        </nav>
        
     </div>
     </>
    )
}

export default Header;