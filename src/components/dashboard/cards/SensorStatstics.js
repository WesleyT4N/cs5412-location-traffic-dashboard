import React from 'react';
import styles from './styles/Card.styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

const SensorStatistics = () => {
    const classes = styles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Sensors"/>
            <CardContent>
                <Typography>
                    Placeholder
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SensorStatistics;
