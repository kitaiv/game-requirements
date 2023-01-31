import Burger from '../Burger';
import styles from './style.module.css'

const Sidebar = () => {
    return ( 
        <div className={styles.sidebar}>
            <div className={styles.inner}>
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