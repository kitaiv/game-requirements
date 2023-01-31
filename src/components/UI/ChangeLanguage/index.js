import style from './style.module.css';
import arrow from './images/arrow.png';
import ukraine from './images/ukraine.png'

const ChangeLanguage = () => {
    return ( 
        <button className={style.change}>
            <img src={ukraine} alt="" />
            <img src={arrow} alt="" />
        </button>
     );
}
 
export default ChangeLanguage;