// import Burger from '../Burger';
import { style } from '@mui/system';
import { useState } from 'react';
import burger from './burger.png';
import close from './close.png';
import styles from './style.module.css'

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    function hideFunc(bool){
        setIsActive(bool);
    }

    return (
        <div className={styles.sidebar}>
            <button className={styles.burger} onClick={() => isActive === false ? hideFunc(true) : hideFunc(false)}><img className={styles.burger__img} src={isActive === true ? close : burger} alt=""/></button>  
            <div className={isActive === true ? styles.inner + ' ' + styles.active : styles.inner}>
                <div className={styles.item}>
                    <button>RPG Games</button>
                </div>
                <div className={styles.item}>
                    <button>Survival Games</button>
                </div>
                <div className={styles.item}>
                    <button>Smart Games</button>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;