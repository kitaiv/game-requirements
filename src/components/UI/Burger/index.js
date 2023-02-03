import { useState } from 'react';
import styles from './style.module.css';

const Burger = ({height}) => {
    const [isActive, setIsActive] = useState(false);

    return ( 
      <button height={height}><img className={styles.burger} alt=""/></button>  
    );
}

export default Burger;