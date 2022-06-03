import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import { useState, useContext } from "react";
import AuthContext from "../../../store/auth-context";
import NewCustomerForm from "./NewCustomerForm";

const AddCustomer = () => {
  const [open, setOpen] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const authCtx = useContext(AuthContext);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCustomer = (customer) => {
    console.log("from add customer");
    console.log(customer);
    /*HTTP request */
    fetch("http://localhost:8080/admin/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json", token: authCtx.token },
      body: JSON.stringify(customer),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.message);
          });
        }
      })
      .then((data) => {
        setAlertMessage(data.title + " customer added successfully!");
        setAlertSeverity("success");
        setShowAlert(true);
        setOpen(false);
      })
      .catch((err) => {
        setAlertMessage(err.message);
        setAlertSeverity("error");
        setShowAlert(true);
      });
  };

  return (
    <div>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleClickOpen}>
        Add New Customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <NewCustomerForm text="Add Customer" onSubmit={handleAddCustomer} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          variant="filled"
          onClose={handleCloseAlert}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddCustomer;
