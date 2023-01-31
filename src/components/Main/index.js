import Sidebar from '../UI/Sidebar';
import styles from './style.module.css'

const Main = () => {
    return ( 
        <section className={styles.main}>
            <Sidebar />
        </section>    
    );
}
 
export default Main;