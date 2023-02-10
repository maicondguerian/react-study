import React from "react";
import "./Modal.css";
import Overlay from "../Overlay/Overlay";

export default function Modal ({children, isOpen=false, onCloseModal = () => {}, onmouseEnter}) {
    return (
        <>
            {isOpen &&(
                <div className="Modal">
                    <Overlay onclick={onCloseModal}>
                        <div className="spike">
                        </div>
                        <div className="content" >
                           {children}
                        </div>
                    </Overlay>
                </div>
            )}
        </>
    )
}