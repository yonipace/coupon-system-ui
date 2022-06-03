import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";

const DeleteWarningDialog = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = (e) => {
    props.onConfirm(e);
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title={props.title}>
        <IconButton onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Deleting a coupon is a permanent action. <br /> Are you sure you want
          to delete it?
          <br />
          <Stack spacing={2} direction="row">
            <Button
              color="inherit"
              size="small"
              onClick={handleConfirm}
              value={props.row.id}
            >
              Yes, I'm Sure
            </Button>
            <Button color="inherit" size="small" onClick={handleClose}>
              Not so sure anymore
            </Button>
          </Stack>
        </Alert>
      </Dialog>
    </div>
  );
};

export default DeleteWarningDialog;
