import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  IconButton,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import TrafficCount from './cards/TrafficCount';
import TrafficHistory from './cards/TrafficHistory';
import PeakTraffic from './cards/PeakTraffic';
import { locationModalMode, modalType } from './modal';
import styles from './styles/Dashboard.styles';
import { fetchSensorsForLocation } from 'actions/sensor';

const REFRESH_RATE = 10000;

const Dashboard = ({ currentLocation, handleOpenModal }) => {
  const classes = styles();
  const dispatch = useDispatch();

  const handleEditClick = handleOpenModal(
    locationModalMode.EDIT,
    modalType.LOCATION
  );

  const handleDeleteClick = handleOpenModal(
    locationModalMode.DELETE,
    modalType.LOCATION
  );

  const handleManageSensors = () => {
    handleOpenModal(null, modalType.SENSORS)();
    dispatch(fetchSensorsForLocation(currentLocation));
  };

  return (
    <Container className={classes.dashboardRoot}>
      <Container className={classes.locationHeader}>
        <Typography variant="h3" display="inline">
          {currentLocation
            ? currentLocation.name
            : 'Please select/create a location'}
        </Typography>
        {currentLocation ? (
          <div className={classes.locationHeaderButtonGroup}>
            <IconButton
              className={classes.locationHeaderButton}
              aria-controls="edit-location"
              aria-haspopup="true"
              onClick={handleEditClick}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className={classes.locationHeaderButton}
              aria-controls="delete-location"
              onClick={handleDeleteClick}
            >
              <DeleteIcon />
            </IconButton>
            <Button
              variant="outlined"
              onClick={handleManageSensors}
              className={classes.locationHeaderButton}
            >
              Manage Sensors
            </Button>
          </div>
        ) : null}
      </Container>
      <Grid container spacing={2} className={classes.cardContainer}>
        <Grid item xs={12} sm={6}>
          <TrafficCount location={currentLocation} refreshRate={REFRESH_RATE} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PeakTraffic location={currentLocation} refreshRate={REFRESH_RATE} />
        </Grid>
        <Grid item xs={12}>
          <TrafficHistory location={currentLocation} refreshRate={1000 * 60} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
