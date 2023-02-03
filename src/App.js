import React, { useState, useEffect } from 'react';
import 'normalize.css';
import gamereqsTheme from './styles';
import { GameCard, Header, Main } from './components';
import { CssVarsProvider } from '@mui/joy';
import { getTestData } from './api';

function App() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    getTestData()
      .then((res) => setCardsData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <CssVarsProvider theme={gamereqsTheme}>
      <Header />
      <Main />
      {cardsData &&
        cardsData.map((card) => <GameCard key={card.id} cardInfo={card} />)}
    </CssVarsProvider>
  );
}

export default App;
