import Styles from './Search.module.css'

import { FiSearch } from "react-icons/fi";
 const Search =()=>{
    return(
        <>
            <div  className={Styles.inputBar}>
                <input type="text" className={Styles.inputSearchBar} name="Search-bar" value="" placeholder='busque aqui seu produto'/>
                <FiSearch className={Styles.IconSearch} onClick={true} />
            </div>
        </>
    )
 }
 export default Search;