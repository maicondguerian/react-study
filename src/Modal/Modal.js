import React, { useState } from "react";
import style from './modal.css'

export default function Modal (){

    const [modal, setModal] = useState(false)
    const toggleModal = () =>{
        setModal(!modal);
    }
    return (
    <>
        <div className="teste"
        onMouseEnter={toggleModal}>
            <button type=""></button>
        </div>
        {modal &&(
            <div className="Modal">
            <div className="overlay">
                <div className="content">
                    <p>pra ver seus pedidos e ter uma experiência personalizada, acesse sua conta :)</p>
                    <button type="">entrar</button>
                    <button type="">cadastrar</button>
                    <p>comprou na loja física ou no app da Ame? Acompanhar o pedido</p>
                    
                </div>
            </div>
            
        </div>
        )}
        

    </>
)
}