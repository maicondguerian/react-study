import logo from '../assets/img/logo.png'
import styles from './Header.module.css'
import { FaSearch } from "react-icons/fa";

function Header (){

    return (
     
     <>
        <nav>
            <img src={logo} alt="logo" width="163" height="32" className={styles.img}/>
        </nav>
     </>
     
    )
}
export default Header;