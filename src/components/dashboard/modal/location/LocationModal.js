import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

import Modal from '../Modal';
import styles from './styles/LocationModal.styles';
import {
  createLocation,
  updateLocation,
  deleteLocation,
} from 'actions/location';

export const locationModalMode = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
};

const LocationModal = ({
  location = { name: '', capacity: '', id: '' },
  modalOpen,
  modalMode,
  handleClose,
}) => {
  const classes = styles();

  const initState = {
    name: location !== null ? location.name : '',
    capacity: location !== null ? location.capacity : '',
    id: location !== null ? location.id : null,
  };
  const [state, setState] = useState(initState);

  useEffect(() => {
    const initState = {
      name: location !== null ? location.name : '',
      capacity: location !== null ? location.capacity : '',
      id: location !== null ? location.id : null,
    };
    setState(initState);
  }, [modalOpen, location]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    switch (modalMode) {
      case locationModalMode.CREATE:
        dispatch(createLocation(state));
        break;
      case locationModalMode.EDIT:
        dispatch(updateLocation(state));
        break;
      case locationModalMode.DELETE:
        dispatch(deleteLocation(state));
        break;
      default:
        break;
    }
    handleClose();
  };

  return (
    <Modal
      modalTitle={
        {
          CREATE: 'Register Location',
          EDIT: 'Edit Location',
          DELETE: 'Delete Location',
        }[modalMode]
      }
      open={modalOpen}
      handleClose={handleClose}
    >
      <DialogContent>
        <TextField
          autoFocus
          id="location-name"
          label="Name"
          type=""
          value={state.name}
          InputProps={{
            readOnly: modalMode === locationModalMode.DELETE,
          }}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          required
        />
        <TextField
          className={classes.numberTextField}
          id="location-capacity"
          label="Capacity"
          type="number"
          value={state.capacity}
          onChange={(e) => setState({ ...state, capacity: e.target.value })}
          InputProps={{
            readOnly: modalMode === locationModalMode.DELETE,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          {
            {
              CREATE: 'Register',
              EDIT: 'Save',
              DELETE: 'Delete',
            }[modalMode]
          }
        </Button>
      </DialogActions>
    </Modal>
  );
};

export default LocationModal;
