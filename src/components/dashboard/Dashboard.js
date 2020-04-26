import React from 'react';
import {
  Container,
  Typography,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import TrafficCount from './cards/TrafficCount';
import TrafficHistory from './cards/TrafficHistory';
import SensorStatistics from './cards/SensorStatstics';
import { locationModalMode } from './modal';
import styles from './styles/Dashboard.styles';

const Dashboard = ({ currentLocation, handleOpenModal }) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleEditClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleEditClose = () => {
    setAnchorEl(null);
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
          <div>
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
              onClick={handleOpenModal(locationModalMode.DELETE)}
            >
              <DeleteIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleEditClose}
            >
              <MenuItem onClick={handleOpenModal(locationModalMode.EDIT)}>
                Edit Location
              </MenuItem>
              <MenuItem>Edit Sensors</MenuItem>
            </Menu>
          </div>
        ) : null}
      </Container>
      <Grid container spacing={2} className={classes.cardContainer}>
        <Grid item xs={12} sm={3}>
          <TrafficCount />
        </Grid>
        <Grid item xs={12} sm={9}>
          <SensorStatistics />
        </Grid>
        <Grid item xs={12}>
          <TrafficHistory />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
