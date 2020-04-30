import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Header from '../header';
import Dashboard from './Dashboard';
import styles from './styles/DashboardContainer.styles';
import {
  locationModalMode,
  LocationModal,
  SensorsModal,
  modalType,
} from './modal';

const DashboardContainer = () => {
  const classes = styles();
  const [state, setState] = useState({
    open: false,
    modalMode: locationModalMode.CREATE,
    modalType: null,
  });

  const currentLocation = useSelector(
    (state) => state.locations.current,
    shallowEqual
  );

  const currentSensors = useSelector(
    (state) => state.sensors.current.sensors,
    shallowEqual
  );

  const handleOpenModal = (modalState, modalType) => () => {
    setState({ ...state, open: true, modalMode: modalState, modalType });
  };

  const handleCloseModal = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className={classes.root}>
      <Header
        handleOpenModal={handleOpenModal(
          locationModalMode.CREATE,
          modalType.LOCATION
        )}
      />
      <Dashboard
        handleOpenModal={handleOpenModal}
        currentLocation={currentLocation}
      />
      <LocationModal
        location={
          state.modalMode !== locationModalMode.CREATE ? currentLocation : null
        }
        modalOpen={state.open && state.modalType === modalType.LOCATION}
        modalMode={state.modalMode}
        handleClose={handleCloseModal}
      />
      <SensorsModal
        sensors={currentSensors || []}
        locationId={currentLocation ? currentLocation.id : ''}
        modalOpen={state.open && state.modalType === modalType.SENSORS}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default DashboardContainer;
