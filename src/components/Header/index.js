import {Link} from 'react-router-dom'
import Container from "@mui/material/Container";
import styles from './style.module.css';
import Burger from '../UI/Burger';
import logo from './images/logo.svg';
import ChangeLanguage from '../UI/ChangeLanguage';
import Profile from '../UI/Profile';
import DonateButton from '../UI/DonateButton';


const Header = () => {
    return ( 
        <header className={styles.header}>
            <Container maxWidth='xl'>
                <div className={styles.inner}>
                    <div>
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className={styles.buttons}>
                        <ChangeLanguage />
                        <Profile />
                        <DonateButton />
                    </div>
                </div>
            </Container>
        </header>
     );
}
 
export default Header;