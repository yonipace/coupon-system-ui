import {
  Alert,
  Card,
  Container,
  FormLabel,
  Link,
  Snackbar,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import NewCustomerForm from "./admin/customer/NewCustomerForm";
import NewCompanyForm from "./admin/company/NewCompanyForm";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";

const SignUp = () => {
  const [client, setClient] = useState("CUSTOMER");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const getClientUrl = (clientType) => {
    if (clientType === "CUSTOMER") {
      return "/customer";
    }
    if (clientType === "COMPANY") {
      return "/company";
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  const handleChange = (e) => {
    setClient(e.target.value);
  };

  const handleSignUp = (newClient) => {
    let url = "/signup";
    if (client === "CUSTOMER") {
      url += "/customer";
    }
    if (client === "COMPANY") {
      url += "/company";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newClient),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            throw new Error(data.message);
          });
        }
      })
      .then((data) => {
        let expiration = new Date().getTime() + 1800000;
        authCtx.login(data.token, data.client, expiration);
        history.replace(getClientUrl(data.client));
        setAlertMessage("Login Successfull!");
        setAlertSeverity("success");
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertMessage(err.message);
        setAlertSeverity("error");
        setShowAlert(true);
      });
  };

  const clientForm =
    client === "CUSTOMER" ? (
      <NewCustomerForm text="submit" onSubmit={handleSignUp} />
    ) : (
      <NewCompanyForm text="submit" onSubmit={handleSignUp} />
    );
  return (
    <div>
      <Container maxWidth="xs">
        <Card
          elevation={3}
          sx={{
            mt: 3,
            mb: 3,
          }}
        >
          <h2>Coupon Management System</h2>
          <h3>Sign Up</h3>
        </Card>
      </Container>

      <Container maxWidth="xs">
        <Card elevation={3} sx={{ p: 2 }}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Are you a Customer or a Company?
            </FormLabel>
            <RadioGroup row onChange={handleChange} value={client}>
              <FormControlLabel
                value="CUSTOMER"
                control={<Radio />}
                label="Customer"
                sx={{ mr: 8 }}
              />
              <FormControlLabel
                value="COMPANY"
                control={<Radio />}
                label="Company"
              />
            </RadioGroup>
          </FormControl>
          {clientForm}
          <Link component={RouterLink} to="/login" underline="hover">
            Already have an account? click here to login
          </Link>
        </Card>
      </Container>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
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

export default SignUp;
