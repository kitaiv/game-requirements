import React , {useState} from 'react'
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Perform the actual search here
  };

  const _searchTags = ['Counter Strike: Global Offensive', 'Dota 2'] //convert to array of objects with slug

  return (
    <main>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Item>
            <Search handleSearch={handleSearch} quickTags={_searchTags}/>
            <GamesList games={games ?? []}/>
          </Item>
        </Grid>
      </Grid>
    </main>
  );
};

export default Main;
