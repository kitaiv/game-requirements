import React, { useState, useEffect } from 'react';
import gamereqsTheme from './styles';
import { GameCard } from './components';
import { CssVarsProvider } from '@mui/joy';
import { getTestData } from './api';

function App() {
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    getTestData()
        .then(res => setCardsData(res.results))
        .catch(err => console.error(err))
  }, [])


  return (
    <CssVarsProvider theme={gamereqsTheme}>
    {
        cardsData && cardsData.map(card => (
            <GameCard
                key={card.id}
                cardInfo={card}
            />
        ))
    }
    </CssVarsProvider>
  );
}

export default App;
