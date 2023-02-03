import logo from '../../assets/img/logo.png';
import Styles from './SearchBarMenu.module.css';
import Search from "../Search/Search.js";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import Modal from '../Modal/Modal';
import MenuLinks from '../MenuLinks/Menulinks';

const SearchBarIcons =()=>{
  return(
    <nav className={Styles.navLinks}>
      <a href=""><svg width="24" height="22" aria-labelledby="headerStoreIcon headerStoreDesc" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" ><title>icone de loja do header</title><path fillRule="evenodd" clipRule="evenodd" d="M19.637.765c.683 0 1.28.306 1.673.8l2.523 5.602c.112.222.168.444.168.666v3.334c0 .93-.546 1.734-1.334 2.108v7.892a1 1 0 01-2 0V13.5h-6v6.1c0 1.418-1.044 2.567-2.333 2.567H3.667c-1.289 0-2.333-1.15-2.333-2.566v-6.326A2.333 2.333 0 010 11.167V7.833c0-.222.056-.444.166-.666l2.51-5.602a2.162 2.162 0 011.688-.8h15.273zm2.03 10.735c.184 0 .333-.15.333-.333V8.5h-3.5v3h3.167zm-.328-5l-1.682-3.734H4.364c-.012 0-.024 0-.034.002L2.657 6.5h18.682zm-8.338 2h3.5v3H13v-3zm-2 0H7.5v3H11v-3zm-5.5 0H2v2.667c0 .184.149.333.333.333H5.5v-3zm-2.167 5.036h9.333v6.065c0 .352-.194.566-.333.566H3.667c-.14 0-.333-.214-.333-.566v-6.065z" fill="#fff"></path></svg></a>
      <a href=""><svg width="29" height="29" className={Styles.edit} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.23 3.176c-1.921-.193-3.932.57-5.162 1.92L12 5.172l-.068-.076c-1.23-1.35-3.24-2.113-5.163-1.92-2.698.27-4.519 2.287-4.519 5.574 0 2.806 3.092 6.757 9.26 12.068a.75.75 0 00.986-.005c6.169-5.432 9.254-9.374 9.254-12.063 0-3.287-1.821-5.305-4.52-5.574zm-5.235 16.077l-.327-.287C6.385 14.306 3.75 10.839 3.75 8.75c0-2.517 1.238-3.889 3.168-4.082 1.791-.179 3.704.753 4.411 2.167a.75.75 0 001.342 0c.707-1.414 2.62-2.346 4.41-2.167 1.931.193 3.169 1.565 3.169 4.082 0 1.979-2.643 5.45-7.928 10.21l-.327.293z"></path></svg></a>
      <a href=""><svg width="25" height="24" aria-labelledby="headerShoppingBasketIcon headerShoppingBasketDesc" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><title>icone de cesta de compras do header</title><path fillRule="evenodd" clipRule="evenodd" d="M14.334 2.5l7.5 6.294h1.833a1 1 0 010 2h-.123l-1.492 11.362c-.14 1.058-1.001 1.971-2.283 1.971H4.901c-1.281 0-2.144-.913-2.283-1.971L1.123 10.794H1a1 1 0 110-2h1.833l7.5-6.294a2 2 0 014 0zm-2 2c.353 0 .684-.091.972-.252l5.417 4.546H5.944l5.418-4.546c.287.16.619.252.972.252zM3.14 10.794h18.386L20.07 21.895c-.018.133-.112.232-.3.232H4.901c-.188 0-.283-.1-.3-.232l-1.46-11.1zm14.86 2a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-4.778 1a1 1 0 112 0v6a1 1 0 11-2 0v-6zm-2.778-1a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-4.778 1a1 1 0 112 0v6a1 1 0 11-2 0v-6z" fill="#fff"></path></svg></a>
    </nav> 
  )
}
  const ButtonLogin =()=> {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onMouseOver = () => {
      setModalIsOpen(true);
    }
    const handleMouseOut = ($event) => {
      setModalIsOpen(false);
    };



  return(
    <>
      <div onMouseEnter={onMouseOver} onMouseLeave={handleMouseOut} className={Styles.searchBarIconsContainer}>
        <div className={Styles.userIcon}>
          <svg width="32px" height="32px" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillOpacity="0.01" d="M4.204 4.2H29.83v25.6H4.204z"></path><path fillRule="evenodd" clipRule="evenodd" d="M17.017 8.466a4.269 4.269 0 014.272 4.267A4.269 4.269 0 0117.017 17a4.269 4.269 0 01-4.27-4.267 4.269 4.269 0 014.27-4.267zm0 1.6a2.668 2.668 0 00-2.67 2.667 2.668 2.668 0 002.67 2.667 2.668 2.668 0 002.67-2.667 2.668 2.668 0 00-2.67-2.667zm0 8.534c1.478 0 3.53.48 5.175 1.24 2.07.955 3.368 2.246 3.368 3.826 0 1.031-.837 1.867-1.869 1.867H10.344a1.868 1.868 0 01-1.87-1.867c0-1.58 1.3-2.87 3.369-3.826 1.645-.76 3.696-1.24 5.174-1.24zm0 1.6c-1.251 0-3.077.435-4.502 1.093-1.67.77-2.438 1.614-2.438 2.373 0 .148.12.267.267.267H23.69c.148 0 .267-.12.267-.267 0-.76-.77-1.603-2.438-2.373-1.425-.658-3.251-1.093-4.503-1.093z" fill="#fff"></path><ellipse cx="17.017" cy="17" rx="16.017" ry="16" stroke="#fff" strokeWidth="2"></ellipse></svg>
        </div>
        <button type="" className={Styles.btnLogin}>
          <span>olá, faça seu login</span><br/><span>ou cadastre-se </span>
          <svg viewBox="0 0 18 11" aria-labelledby="arrowIcon arrowDesc" fill="#fff" width="10px" height="6px">
          <path fill="inherit" d="M2.1 0L0 2.1 9 11l9-8.9L15.9 0 9 6.8 2.1 0z"></path></svg>
        </button>
      </div>
      <Modal isOpen={modalIsOpen} 
        onCloseModal={() => { setModalIsOpen(false) }}
        >
        <p>pra ver seus pedidos e ter uma experiência personalizada, acesse sua conta :)</p>
        <button type="">entrar</button>
        <button type="">cadastrar</button>
        <p>comprou na loja física ou no app da Ame? Acompanhar o pedido</p>
      </Modal>
    </>
  )
}

const LogoAmericanas =()=>{
  return(
    <a href="#"><img
      src={logo} alt="logo"
      width="163" height="32" className={Styles.imgLogo}/>
    </a>
  )
}

const SearchBar =()=>{
    return(
      <>
        <div className={Styles.mainMenu}>
          <LogoAmericanas/>
          <MenuLinks/>
          <Search Icon={FiSearch}/>
          <ButtonLogin/>
          <SearchBarIcons/>
          
        </div>
      </>
    )
}
export default SearchBar; 