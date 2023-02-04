import { Sheet, Grid } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import GamesList from '../GamesList';
import Search from '../Search';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
  backgroundColor: 'transparent'
}));

const Main = ({games}) => {
  return (
    <main>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Item>
            <Search />
            <GamesList games={games ?? []}/>
          </Item>
        </Grid>
      </Grid>
    </main>
  );
};

export default Main;
