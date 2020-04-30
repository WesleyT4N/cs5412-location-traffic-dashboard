import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
} from '@material-ui/core';

import Modal from '../Modal';
import styles from './styles/SensorsModal.styles';
import SensorTableRow from './SensorTableRow';
import SensorTableFooter from './SensorTableFooter';
import { createSensor, updateSensor, deleteSensor } from 'actions/sensor';

const convertToMap = (sensors) =>
  sensors.reduce((map, sensor) => {
    map[sensor.id] = sensor;
    return map;
  }, {});

const SensorsModal = ({ sensors, locationId, modalOpen, handleClose }) => {
  const classes = styles();
  const [newSensor, setNewSensor] = useState({
    name: '',
    type: '',
    locationId,
  });
  const [isCreating, setCreating] = useState(false);
  const [editSensorId, setEditing] = useState(null);
  const [deleteSensorId, setDeleting] = useState(null);
  const [sensorsState, setSensorsState] = useState(convertToMap(sensors));
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.sensors.loading);

  useEffect(() => {
    setSensorsState(convertToMap(sensors));
    setCreating(false);
    setNewSensor({
      name: '',
      type: '',
      locationId,
    });
  }, [modalOpen, sensors, locationId]);

  const handleCreate = () => {
    const sensor = newSensor;
    dispatch(createSensor(sensor));
    setCreating(false);
    setNewSensor({
      name: '',
      type: '',
      locationId,
    });
    setSensorsState(convertToMap(sensors));
  };

  const handleEdit = () => {
    const sensor = sensorsState[editSensorId];
    dispatch(updateSensor(sensor));
    setEditing(null);
    setSensorsState(convertToMap(sensors));
  };

  const handleDelete = () => {
    const sensor = sensorsState[deleteSensorId];
    dispatch(deleteSensor(sensor));
    setDeleting(null);
    setSensorsState(convertToMap(sensors));
  };

  const handleNameChange = (e) =>
    setSensorsState({
      ...sensorsState,
      [editSensorId]: {
        ...sensorsState[editSensorId],
        name: e.target.value,
      },
    });

  const handleTypeChange = (e) =>
    setSensorsState({
      ...sensorsState,
      [editSensorId]: {
        ...sensorsState[editSensorId],
        type: e.target.value,
      },
    });

  return (
    <Modal
      modalTitle="Manage Sensors"
      open={modalOpen}
      handleClose={handleClose}
      className={classes.modalContainer}
      fullWidth
    >
      <DialogContent>
        {loading ? (
          <CircularProgress />
        ) : (
          <Table aria-label="sensor table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(sensorsState).map((sensor) => (
                <SensorTableRow
                  sensor={sensor}
                  editSensorId={editSensorId}
                  setEditing={setEditing}
                  handleEdit={handleEdit}
                  handleNameChange={handleNameChange}
                  handleTypeChange={handleTypeChange}
                  deleteSensorId={deleteSensorId}
                  setDeleting={setDeleting}
                  handleDelete={handleDelete}
                />
              ))}
            </TableBody>
            <SensorTableFooter
              newSensor={newSensor}
              setNewSensor={setNewSensor}
              isCreating={isCreating}
              setCreating={setCreating}
              handleCreate={handleCreate}
            />
          </Table>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Done</Button>
      </DialogActions>
    </Modal>
  );
};

export default SensorsModal;
