import React from "react";
import './modal.css';

export default function Modal ({ children, isOpen=false }) {
    return (
        <>
            {isOpen &&(
                <div className="Modal">
                    <div className="overlay">
                        <div className="content">
                           {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}