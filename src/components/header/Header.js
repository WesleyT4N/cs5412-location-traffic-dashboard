import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  InputBase,
  Grid,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import { fetchAllLocations, setCurrentLocation } from 'actions/location';
import AddIcon from '@material-ui/icons/Add';
import PlaceIcon from '@material-ui/icons/Place';

import styles from './Header.styles';

const Header = ({ handleOpenModal }) => {
  const classes = styles();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.locations.loading);
  const locations = useSelector((state) => state.locations.all, shallowEqual);
  const currentLocation = useSelector(
    (state) => state.locations.current,
    shallowEqual
  );

  const handleOpen = () => {
    dispatch(fetchAllLocations());
  };

  const handleChange = (e) => {
    dispatch(setCurrentLocation(e.target.value));
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3} className={classes.title}>
            <Typography variant="h5">Location Traffic Tracker</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <PlaceIcon />
              </div>
              <Select
                placeholder="Select a Location"
                input={
                  <InputBase
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                }
                value={currentLocation ? currentLocation : ''}
                onOpen={handleOpen}
                onChange={handleChange}
                fullWidth
              >
                {loading ? (
                  <CircularProgress className={classes.inputLoadingIndicator} />
                ) : (
                  locations.map((loc) => (
                    <MenuItem key={loc.id} value={loc}>
                      {loc.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </div>
          </Grid>
          <Grid item xs={12} md={3} className={classes.headerButtonContainer}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.headerButton}
              onClick={handleOpenModal}
            >
              <AddIcon />
              Register Location
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
