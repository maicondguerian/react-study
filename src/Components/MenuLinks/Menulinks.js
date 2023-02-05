import Modal from '../Modal/Modal'
import { useState } from 'react'
import Styles from './menuLinks.module.css'

export default function MenuLinks() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onMouseOver = () => {
      setModalIsOpen(true);
    }
    const handleMouseOut = () => {
      setModalIsOpen(false);
    };
    
    return (
        <>
            <main className={Styles.mainMenu}>
                <div className={Styles.divCep}>
                    <button className={Styles.btn_} onMouseOver={onMouseOver} onMouseLeave={handleMouseOut}>
                    <svg width="20px" height="20px" viewBox="0 0 29 32"  fill= "rgb(255, 255, 255)"className='svgIcon'>
                        <path fill="inherit" d="M12 0c6.44 0 11.667 5.155 11.667 11.523 0 3.045-1.82 7.31-4.747 12.017l-.312.497c-1.192 1.878-2.485 3.695-3.618 5.108l-.406.501c-1.188 1.449-1.824 2.02-2.584 2.02-.843 0-1.532-.702-2.99-2.52l-.19-.24a59.948 59.948 0 01-3.428-4.868l-.312-.498C2.152 18.834.333 14.57.333 11.523.333 5.155 5.561 0 12 0zm0 28.801c.262-.281.575-.646.922-1.074l.298-.372a57.483 57.483 0 003.277-4.657c2.868-4.52 4.67-8.645 4.67-11.175 0-4.98-4.1-9.023-9.167-9.023-5.066 0-9.167 4.044-9.167 9.023 0 2.445 1.682 6.377 4.382 10.717l.288.458a57.472 57.472 0 003.277 4.657l.298.372.226.276c.184.221.356.422.514.598l.182.2zm0-22.968A5.833 5.833 0 1112 17.5a5.833 5.833 0 010-11.667zm0 2.5A3.333 3.333 0 1012 15a3.333 3.333 0 000-6.667z"></path></svg>
                    <span>
                        infome seu CEP
                    </span>
                    </button>
                    <Modal  isOpen={modalIsOpen}>
                        <p>teste</p>
                    </Modal>
                </div>
                <ul>
                    <li>
                        para sua empresa
                    </li>
                    <li>
                        baixe o app
                    </li>
                    <li>
                        entrega rápida
                    </li>
                    <li>
                        ame digital
                    </li>
                    <li>
                        marcas próprias
                    </li>
                    <li>
                        produtos internacionais
                    </li>
                    <li>
                        lojas oficiais
                    </li>
                    <li>
                    <svg width="9" height="15"  viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='svgIcon'><path fillRule="evenodd" clipRule="evenodd" d="M0 12.484h9v2.032H0v-2.032zm4.447-9.29a5.075 5.075 0 012.26.484c.659.322.988.931.988 1.827v3.408c0 .236.005.522.015.859-.006.18.036.358.12.517.078.1.181.178.299.225v.287H5.925a2.095 2.095 0 01-.128-.423 4.594 4.594 0 01-.057-.45 4.14 4.14 0 01-.966.741c-.454.246-.963.371-1.479.363a2.61 2.61 0 01-1.738-.576A2.013 2.013 0 01.87 8.823 2.1 2.1 0 011.973 6.84a5.052 5.052 0 011.778-.478l.69-.081c.273-.023.543-.08.803-.17a.587.587 0 00.434-.553.648.648 0 00-.331-.63 2.141 2.141 0 00-.97-.174 1.295 1.295 0 00-1.017.34 1.385 1.385 0 00-.284.682H1.12c.017-.58.216-1.14.569-1.603.535-.653 1.454-.98 2.758-.98zm1.222 3.994a2.24 2.24 0 01-.387.188 3.352 3.352 0 01-.537.132l-.455.082a3.03 3.03 0 00-.917.266.883.883 0 00-.47.825.85.85 0 00.29.718c.202.151.449.229.7.222.43.002.85-.127 1.205-.368.368-.246.558-.693.573-1.343l-.002-.722zM9 0v2.032H0V0h9z" fill="#fff"></path></svg>
                        ofertas do dia
                    </li>
                </ul>
            </main>

        </>
    )
}


