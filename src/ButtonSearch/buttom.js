

const Buttom = ({Icon, iconSize=20, fontSize=16, iconColor}) =>{
    return(
        <>
        <button type="">
        {Icon ? <Icon style={{fontSize:iconSize+"px", color: iconColor ? iconColor : 'inherit'}} /> : <></>}
        </button>
        </>
    )
}

export default Buttom;