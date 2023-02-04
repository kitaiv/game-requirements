import React from 'react';
import GameCard from '../UI/GameCard';
import Sheet from '@mui/joy/Sheet';
import { Grid } from '@mui/joy';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary
}));

function GamesList({ games = [] }) {
  const displayGames =
    games &&
    games.map((game) => (
      <Grid
        key={game.id}
        xs={4}
        md={4}
        lg={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Item>
          <GameCard cardInfo={game} />
        </Item>
      </Grid>
    ));

  return (
    <Grid container spacing={3} sx={{ flexGrow: 1, width: '100%' }}>
      {displayGames}
    </Grid>
  );
}

export default GamesList;
