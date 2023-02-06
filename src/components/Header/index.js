import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import styles from './style.module.css';
import ChangeLanguage from '../UI/ChangeLanguage';
import Profile from '../UI/Profile';
import CustomButton from '../UI/CustomButton';
import Logo from '../UI/Logo';
import { styled } from '@mui/joy/styles';
import { Sheet, Grid, Typography } from '@mui/joy';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary
}));

const Header = () => {
  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        width: '100%',
        justifyContent: 'space-between',
        borderBottom: '2px solid #1C1836',
      }}
    >
      <Grid xs={1}>
        <Item />
      </Grid>
      <Grid xs={7}>
        <Item sx={{ float: 'left' }}>
          <Logo />
        </Item>
      </Grid>
      <Grid xs={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
        <Item>
          <ChangeLanguage />
        </Item>
      </Grid>
      <Grid xs={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Item>
          <CustomButton text='Donate' textStyles={{marginLeft: '.5rem'}} icon={<VolunteerActivismIcon />} />
        </Item>
      </Grid>
    </Grid>
  );
};

export default Header;
