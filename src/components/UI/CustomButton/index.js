import style from './style.module.css'
import { Typography, Button } from '@mui/joy'

const CustomButton = ({text = '', icon = '', textStyles = null, btnStyles = null, isLoading = false}) => {
    return ( 
        <Button loading={isLoading} sx={btnStyles}>
            {icon}
            <Typography color="text" noWrap sx={textStyles}>{text}</Typography>
        </Button>
    );
}
 
export default CustomButton;