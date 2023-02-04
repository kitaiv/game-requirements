import React from 'react';
import GameCard from '../UI/GameCard';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary
}));

function GamesList({ games = [] }) {
  const displayGames = games && games.map(game => (<Item key={game.id}><GameCard cardInfo={game}/></Item>))

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      justifyContent="start"
      sx={{ width: '100%' }}
    >
        {displayGames}
    </Stack>
  );
}

export default GamesList;
