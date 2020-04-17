import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';

import './App.css';
import { DashboardContainer } from './components';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: indigo,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardContainer />
    </ThemeProvider>
  );
}

export default App;
