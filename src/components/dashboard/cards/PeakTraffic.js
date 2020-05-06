import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Card.styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { fetchPeakTraffic } from 'actions/traffic';
import PersonIcon from '@material-ui/icons/Person';

const PeakTraffic = ({ location, refreshRate }) => {
  const classes = styles();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.traffic.peakTraffic.loading);
  let peakTraffic = useSelector((state) => state.traffic.peakTraffic);
  let peakTrafficCount = peakTraffic.count;
  let peakTrafficTime = new Date(peakTraffic.time * 1000).toLocaleTimeString();
  const prevLocationRef = useRef();
  useEffect(() => {
    prevLocationRef.current = location;
  });
  const prevLocation = prevLocationRef.current;

  useEffect(() => {
    if (location) {
      dispatch(fetchPeakTraffic(location));
    }
    const interval = setInterval(() => {
      if (location) {
        dispatch(fetchPeakTraffic(location));
      }
    }, refreshRate);
    return () => clearInterval(interval);
  }, [location, dispatch, refreshRate]);

  return (
    <Card className={classes.root}>
      <CardHeader title="Peak Traffic" subheader="over the past 12 hours" />
      <CardContent className={classes.content}>
        {(loading && !location) ||
        peakTrafficCount === null ||
        prevLocation !== location ? (
          <CircularProgress color="primary" />
        ) : (
          <div className={classes.contentInner}>
            <Typography
              color="primary"
              variant="h1"
              className={classes.cardTypography}
            >
              {peakTrafficCount}
              <PersonIcon className={classes.icon} color="primary" />
            </Typography>
            <Typography
              color="primary"
              variant="h3"
              className={classes.cardTypography}
            >
              @ {peakTrafficTime}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PeakTraffic;
