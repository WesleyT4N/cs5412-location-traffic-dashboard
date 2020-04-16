import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './Header.styles'

const Header = () => {
    const classes = styles();
    return (
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <Typography variant="h5" className={classes.title}>
                  Location Traffic Tracker
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    fullWidth
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    )
}

export default Header;
