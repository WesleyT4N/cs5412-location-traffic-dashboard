import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

import Modal from '../Modal';
import styles from './styles/CreateLocationModal.styles';

const CreateLocationModal = ({ modalOpen, handleClose, handleSubmit }) => {
  const classes = styles();
  return (
    <Modal
      modalTitle="Register Location"
      open={modalOpen}
      handleClose={handleClose}
    >
      <DialogContent>
        <TextField autoFocus id="location-name" label="Name" type="" />
        <TextField id="location-capacity" label="Capacity" type="number" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          Register
        </Button>
      </DialogActions>
    </Modal>
  );
};

export default CreateLocationModal;
