import Overlay from '../Overlay/Overlay';
import Styles from './Search.module.css'
import  { useState } from 'react';

 const Search =({Icon})=>{
    const [isModalVisible, setIsModalVisible] = useState(false);


    return(
        <>
            <div  className={Styles.inputBar}>
                <input type="text" className={Styles.inputSearchBar} name="Search-bar"  placeholder='busque aqui seu produto' onClick={()=>setIsModalVisible(true)} />
                { Icon == null ? <></> : <Icon className={Styles.IconSearch} />}
                { isModalVisible ? <Overlay></Overlay> : null}
            </div>
            
        </>
    )
    
 }
 export default Search;