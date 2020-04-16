import React from 'react';
import styles from './styles/Card.styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

const TrafficCount = () => {
    const classes = styles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Current Traffic"/>
            <CardContent>
                <Typography>
                    Placeholder
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TrafficCount;
