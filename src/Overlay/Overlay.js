import styles from "./Overlay.module.css";

const Overlay = ({ children, onclick = () => {} }) => {
    return (
        <div className={styles.overlay} onClick={onclick}>
            {children}
        </div>
    )
}

export default Overlay;