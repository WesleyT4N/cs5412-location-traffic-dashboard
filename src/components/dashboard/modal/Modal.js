import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const Modal = ({
  modalTitle,
  open,
  handleClose,
  children,
  fullWidth = false,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth={fullWidth}
    >
      <DialogTitle id="form-dialog-title">{modalTitle}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
