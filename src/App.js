import { ThemeProvider } from '@emotion/react';
import theme from './styles';
import { Header, ListGames } from './components';
import { Paper } from '@mui/material';
import 'normalize.css';
import Main from './components/Main';

function App() {
  return (
    // <ThemeProvider theme={theme}>
      // <Paper>
      <>
        <Header />
        <Main />
      </>
        // {/* <ListGames /> */}
      // </Paper>
    // </ThemeProvider>
  );
}

export default App;