import React from 'react';
import styles from './styles/Card.styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

const PeakTraffic = () => {
  const classes = styles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Peak Traffic" />
      <CardContent>
        <Typography>Placeholder</Typography>
      </CardContent>
    </Card>
  );
};

export default PeakTraffic;
