import { styled } from '@mui/joy/styles';
import {Sheet, Grid, Chip, Typography} from '@mui/joy';

const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.vars.palette.text.tertiary,
  }));

function SearchTags({ handleSearch , tags }) {

  return (
    <Grid container spacing={0} sx={{ flexGrow: 1, alignItems: 'baseline' }}>
      <Typography>Most popular searches:</Typography>
      {tags &&
        tags.map((el) => (
          <Grid key={el}>
            <Item>
              <Chip onClick={() => handleSearch(el)}>{el}</Chip>
            </Item>
          </Grid>
        ))}
    </Grid>
  );
}

export default SearchTags;
