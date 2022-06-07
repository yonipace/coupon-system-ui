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
import NewCompanyForm from "./NewCompanyForm";

const AddCompany = () => {
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

  const handleAddCompany = (company) => {
    fetch("/admin/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json", token: authCtx.token },
      body: JSON.stringify(company),
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
        setAlertMessage(data.name + " company added successfully!");
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
        Add New Company
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Company</DialogTitle>
        <DialogContent>
          <NewCompanyForm text="Add Company" onSubmit={handleAddCompany} />
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
export default AddCompany;
