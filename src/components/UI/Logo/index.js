import {Link} from 'react-router-dom'
import logo from './logo.png'
import { Typography } from '@mui/joy'

function Logo(){
    return(
        <Link to="/" style={{textDecoration: 'none'}}>
            <img width="38" height="38" src={logo} alt="" />
            <Typography
              sx={{
                fontWeight: 'bold',
                display: 'inline',
                marginLeft: '1rem',
                background: 'linear-gradient(104.43deg, #D345CE 7.08%, rgba(62, 239, 144, 0.86) 77.35%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent'
              }}
              level="h1"
            >
              GRs
            </Typography>
          </Link>
    )
}

export default Logo