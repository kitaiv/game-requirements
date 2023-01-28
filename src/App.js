import { ThemeProvider } from '@emotion/react';
import theme from './styles';
import { Header, ListGames } from './components';
import { Paper } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Header />
        <ListGames />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
