import bannerImg from '../../assets/img/BannerPromo.webp'
import Styles from './PictureBanner.module.css'

export default  function PictureBanner(){

    return (
        <div className={Styles.bannerContainer}>
            <img src={bannerImg} alt="" />
        </div>
    )
}
