import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import Header from '../header';
import Dashboard from './Dashboard';
import styles from './styles/DashboardContainer.styles';
import { CreateLocationModal, Modal } from './modal';

const DashboardContainer = () => {
  const classes = styles();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <CreateLocationModal
        modalOpen={open}
        handleClose={handleCloseModal}
        handleSubmit={handleCloseModal}
      />
    </div>
  );
};

export default DashboardContainer;
