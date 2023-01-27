import Styles from './Search.module.css'
import  { useState } from 'react';

 const Search =({Icon})=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const Modal =()=>{
        return(
            <>
                { isModalVisible ? <div className={Styles.BlurBody} onClick={()=>setIsModalVisible(false)}></div> : null}
            </>
        )
    }

    return(
        <>
            <div  className={Styles.inputBar}>
                <input type="text" className={Styles.inputSearchBar} name="Search-bar" value="" placeholder='busque aqui seu produto' onClick={()=>setIsModalVisible(true)} />
                { Icon == null ? <></> : <Icon className={Styles.IconSearch} />}
                <Modal/>
            </div>
            
        </>
    )
 }
 export default Search;