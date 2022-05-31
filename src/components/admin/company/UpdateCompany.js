import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

import { useState } from "react";
import UpdateCompanyForm from "./UpdateCompanyForm";

const UpdateCompany = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="update company">
        <IconButton onClick={handleClickOpen} value={1}>
          <CreateIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Company</DialogTitle>
        <DialogContent>
          <UpdateCompanyForm company={props.row} closeDialog={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateCompany;
