import { useState } from 'react';
import burger from './burger.png';
import styles from './style.module.css'

const Burger = ({height}) => {
    const [isActive, setIsActive] = useState(false);
    return ( 
      <button height={height}><img src={burger} className={styles.burger} alt=""/></button>  
    );
}

export default Burger;