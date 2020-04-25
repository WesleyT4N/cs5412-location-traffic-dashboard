import React, { useState } from 'react';
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

  const handleOpenModal = (modalState) => () => {
    setState({ ...state, open: true, modalMode: modalState });
  };

  const handleCloseModal = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className={classes.root}>
      <Header handleOpenModal={handleOpenModal(locationModalMode.CREATE)} />
      <Dashboard handleOpenModal={handleOpenModal} />
      <LocationModal
        modalOpen={state.open}
        modalMode={state.modalMode}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default DashboardContainer;
