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
import UpdateCouponForm from "./UpdateCouponForm";

const UpdateCoupon = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="update coupon">
        <IconButton onClick={handleClickOpen} value={1}>
          <CreateIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Coupon</DialogTitle>
        <DialogContent>
          <UpdateCouponForm coupon={props.row} closeDialog={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateCoupon;
