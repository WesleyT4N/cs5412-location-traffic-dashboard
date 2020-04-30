import React from 'react';

import { TableRow, TableCell, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

const SensorTableRow = ({
  sensor,
  editSensorId,
  deleteSensorId,
  setEditing,
  setDeleting,
  handleEdit,
  handleDelete,
  handleNameChange,
  handleTypeChange,
}) =>
  editSensorId === sensor.id ? (
    <TableRow key={sensor.id} selected>
      <TableCell>
        <TextField value={sensor.name} onChange={handleNameChange} />
      </TableCell>
      <TableCell>
        <TextField value={sensor.type} onChange={handleTypeChange} />
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEdit}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => setEditing(null)}>
          <CloseIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ) : deleteSensorId === sensor.id ? (
    <TableRow key={sensor.id} selected>
      <TableCell colSpan={2}>Are you sure you want to delete?</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleDelete}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => setDeleting(null)}>
          <CloseIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ) : (
    <TableRow key={sensor.id}>
      <TableCell>{sensor.name}</TableCell>
      <TableCell>{sensor.type}</TableCell>
      <TableCell align="right">
        <IconButton onClick={() => setEditing(sensor.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => setDeleting(sensor.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );

export default SensorTableRow;
