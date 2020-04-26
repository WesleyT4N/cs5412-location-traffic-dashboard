import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Header from '../header';
import Dashboard from './Dashboard';
import styles from './styles/DashboardContainer.styles';
import { locationModalMode, LocationModal } from './modal';

const DashboardContainer = () => {
  const classes = styles();
  const [state, setState] = useState({
    open: false,
    modalMode: locationModalMode.CREATE,
  });

  const currentLocation = useSelector(
    (state) => state.locations.current,
    shallowEqual
  );

  const handleOpenModal = (modalState) => () => {
    setState({ ...state, open: true, modalMode: modalState });
  };

  const handleCloseModal = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className={classes.root}>
      <Header handleOpenModal={handleOpenModal(locationModalMode.CREATE)} />
      <Dashboard
        handleOpenModal={handleOpenModal}
        currentLocation={currentLocation}
      />
      <LocationModal
        location={
          state.modalMode !== locationModalMode.CREATE ? currentLocation : null
        }
        modalOpen={state.open}
        modalMode={state.modalMode}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default DashboardContainer;
