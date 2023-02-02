import cssClass from "./Overlay.module.css";

const Overlay = ({ children, onclick = () => {}, zIndex=70 }) => {
    return (
        <div className={cssClass.overlay} onClick={onclick} style={{
            zIndex: zIndex
        }}>
            {children}
        </div>
    )
}

export default Overlay;