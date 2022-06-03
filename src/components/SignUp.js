import { Card, Container, FormLabel, Link } from "@mui/material";
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

  const handleChange = (e) => {
    setClient(e.target.value);
  };

  const handleSignUp = (newClient) => {
    let url = "http://localhost:8080/signup";
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
            throw new Error();
          });
        }
      })
      .then((data) => {
        authCtx.login(data.token);
        history.replace(getClientUrl(data.client));
      })
      .catch((err) => {
        alert(err.message);
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
    </div>
  );
};

export default SignUp;
