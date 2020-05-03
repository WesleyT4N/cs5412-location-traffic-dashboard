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
import { fetchTrafficCount } from 'actions/traffic';
import PersonIcon from '@material-ui/icons/Person';

const TrafficCount = ({ location, refreshRate }) => {
  const classes = styles();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.traffic.trafficCount.loading);
  let trafficCount = useSelector((state) => state.traffic.trafficCount.count);
  const prevLocationRef = useRef();
  useEffect(() => {
    prevLocationRef.current = location;
  });
  const prevLocation = prevLocationRef.current;

  useEffect(() => {
    if (location) {
      dispatch(fetchTrafficCount(location));
    }
    const interval = setInterval(() => {
      if (location) {
        dispatch(fetchTrafficCount(location));
      }
    }, refreshRate);
    return () => clearInterval(interval);
  }, [location, dispatch, refreshRate]);

  return (
    <Card className={classes.root}>
      <CardHeader title="Current Traffic" subheader="" />
      <CardContent className={classes.content}>
        {(loading && !location) ||
        !trafficCount ||
        prevLocation !== location ? (
          <CircularProgress color="primary" />
        ) : (
          <div className={classes.contentInner}>
            <Typography
              color="primary"
              variant="h1"
              className={classes.cardTypography}
            >
              {trafficCount}
              <PersonIcon className={classes.icon} color="primary" />
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TrafficCount;
