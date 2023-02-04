import style from './style.module.css'
import { Typography, Button } from '@mui/joy'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const DonateButton = () => {
    return ( 
        <Button>
            <VolunteerActivismIcon />
            <Typography color="text" noWrap sx={{marginLeft: '.5rem'}}>Donate</Typography>
        </Button>
    );
}
 
export default DonateButton;