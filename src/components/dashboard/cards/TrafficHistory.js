import React from 'react';
import styles from './styles/Card.styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

const TrafficHistory = () => {
    const classes = styles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Traffic History"/>
            <CardContent>
                <Typography>
                    Placeholder
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TrafficHistory;
