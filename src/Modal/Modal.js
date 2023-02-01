import React from "react";
import './modal.css';
import Overlay from "../Overlay/Overlay";

export default function Modal ({ children, isOpen=false }) {
    return (
        <>
            {isOpen &&(
                <div className="Modal">
                    <Overlay>
                        <div className="content">
                           {children}
                        </div>
                    </Overlay>
                </div>
            )}
        </>
    )
}