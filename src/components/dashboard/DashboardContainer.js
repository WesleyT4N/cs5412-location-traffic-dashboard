import React from 'react';
import { Container } from '@material-ui/core';

import Header from '../header';
import Dashboard from './Dashboard';
import styles from './styles/DashboardContainer.styles';

const DashboardContainer = () => {
  const classes = styles();
  return (
    <Container className={classes.root} maxWidth={false} disableGutters>
      <Header />
      <Dashboard />
    </Container>
  );
};

export default DashboardContainer;
