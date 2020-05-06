import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Card.styles';
import {
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { Line } from 'react-chartjs-2';
import { fetchTrafficHistory } from 'actions/traffic';

const TrafficHistory = ({ location, refreshRate }) => {
  const classes = styles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.traffic.trafficHistory.loading);
  let trafficHistory =
    useSelector((state) => state.traffic.trafficHistory.trafficHistory) || [];
  const prevLocationRef = useRef();
  useEffect(() => {
    prevLocationRef.current = location;
  });
  const prevLocation = prevLocationRef.current;

  useEffect(() => {
    if (location) {
      dispatch(fetchTrafficHistory(location));
    }
    const interval = setInterval(() => {
      if (location) {
        dispatch(fetchTrafficHistory(location));
      }
    }, refreshRate);
    return () => clearInterval(interval);
  }, [location, dispatch, refreshRate]);
  const data = {
    labels: trafficHistory.map((e) =>
      new Date(e.time * 1000).toLocaleTimeString()
    ),
    datasets: [
      {
        label: 'Traffic Count',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: theme.palette.primary.main,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: theme.palette.primary.main,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: trafficHistory.map((e) => e.trafficCount),
      },
    ],
  };

  return (
    <Card className={classes.taller}>
      <CardHeader title="Traffic History" subheader="" />
      <CardContent className={classes.content}>
        {(loading && !location) ||
        !trafficHistory ||
        prevLocation !== location ? (
          <CircularProgress color="primary" />
        ) : (
          <div className={classes.contentInner}>
            <Line
              data={data}
              legend={{ display: false }}
              height={250}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        suggestedMin: 0,
                        suggestedMax: Math.max(...data.datasets[0].data) + 25,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TrafficHistory;
