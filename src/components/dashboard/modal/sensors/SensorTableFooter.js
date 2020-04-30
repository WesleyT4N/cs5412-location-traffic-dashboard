import React from 'react';

import {
  TableRow,
  TableCell,
  IconButton,
  TableFooter,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

const SensorTableFooter = ({
  newSensor,
  setNewSensor,
  isCreating,
  setCreating,
  handleCreate,
}) => (
  <TableFooter>
    {isCreating ? (
      <TableRow selected>
        <TableCell>
          <TextField
            value={newSensor.name}
            onChange={(e) =>
              setNewSensor({ ...newSensor, name: e.target.value })
            }
            placeholder="Name"
          />
        </TableCell>
        <TableCell>
          <TextField
            value={newSensor.type}
            onChange={(e) =>
              setNewSensor({ ...newSensor, type: e.target.value })
            }
            placeholder="Type"
          />
        </TableCell>
        <TableCell align="right">
          <IconButton onClick={handleCreate}>
            <CheckIcon />
          </IconButton>
          <IconButton onClick={() => setCreating(false)}>
            <CloseIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ) : (
      <TableRow>
        <TableCell colSpan={3} align="right">
          <IconButton onClick={() => setCreating(true)}>
            <AddCircleIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )}
  </TableFooter>
);

export default SensorTableFooter;
