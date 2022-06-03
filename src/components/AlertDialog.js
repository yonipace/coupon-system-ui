import { Alert, AlertTitle, Dialog } from "@mui/material";
import { useState } from "react";

const AlertDialog = (props) => {
  const [open, setOpen] = useState(props.openAlert);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    </Dialog>
  );
};
export default AlertDialog;
