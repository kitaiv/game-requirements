import React, { useState, useEffect } from 'react';
import 'normalize.css';
import gamereqsTheme from './styles';
import { GameCard, Header, Main } from './components';
import { CssVarsProvider } from '@mui/joy';
import { getTestData } from './api';
import Menu from './components/UI/Menu';

function App() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    getTestData()
      .then((res) => setCardsData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <CssVarsProvider theme={gamereqsTheme}>
      <Menu />
      <div id="page-wrap">
        <Header />
        <Main games={cardsData}/>
      </div>
    </CssVarsProvider>
  );
}

export default App;
