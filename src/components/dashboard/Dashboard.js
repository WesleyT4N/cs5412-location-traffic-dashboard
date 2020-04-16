import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import TrafficCount from './cards/TrafficCount';
import TrafficHistory from './cards/TrafficHistory';
import SensorStatistics from './cards/SensorStatstics';
import styles from "./styles/Dashboard.styles";


const Dashboard = () => {
    const classes = styles();
    return (
        <Container className={classes.root}>
            <Typography variant="h3">
                Location Name
            </Typography>
            <Grid container spacing={2} className={classes.cardContainer}>
                <Grid item xs={12} sm={3}>
                    <TrafficCount/>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <SensorStatistics/>
                </Grid>
                <Grid item xs={12}>
                    <TrafficHistory/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;
