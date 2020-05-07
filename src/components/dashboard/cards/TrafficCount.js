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

const average = (data) => {
  const dataLen = data.length;
  return dataLen > 0 ? data.reduce((acc, e) => acc + e, 0) / dataLen : 0;
};

const calculateTrafficLevel = (trafficHistory, trafficCount) => {
  if (trafficCount === null || trafficHistory.length === 0) {
    return '';
  }
  const trafficHistoryCounts = trafficHistory.map((e) => e.trafficCount);
  const avg = average(trafficHistoryCounts);
  const squaredDiffs = trafficHistoryCounts.map((e) => {
    const diff = e - avg;
    return diff * diff;
  });
  const stdDev = Math.sqrt(average(squaredDiffs));
  if (trafficCount > avg + stdDev) {
    return 'Busier than average';
  } else if (trafficCount < avg - stdDev) {
    return 'Less busy than average';
  }
  return 'About average';
};

const TrafficCount = ({ location, refreshRate }) => {
  const classes = styles();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.traffic.trafficCount.loading);
  let trafficCount = useSelector((state) => state.traffic.trafficCount.count);
  let trafficHistory =
    useSelector((state) => state.traffic.trafficHistory.trafficHistory) || [];
  let trafficHistoryLoading = useSelector(
    (state) => state.traffic.trafficHistory.loading
  );
  let trafficLevel = calculateTrafficLevel(trafficHistory, trafficCount);

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
        trafficCount === null ||
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
            <Typography
              color="primary"
              variant="h4"
              className={classes.cardTypography}
            >
              {prevLocation !== location || trafficHistoryLoading ? (
                <CircularProgress color="primary" />
              ) : (
                trafficLevel
              )}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TrafficCount;
