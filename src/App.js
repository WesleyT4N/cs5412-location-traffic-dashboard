import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';

import './App.css';
import { DashboardContainer } from './components';
import rootReducer from './reducers/rootReducer';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: indigo,
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DashboardContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
