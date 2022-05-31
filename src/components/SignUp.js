import {
  Box,
  Button,
  Card,
  Container,
  FormLabel,
  Link,
  Paper,
} from "@mui/material";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import NewCustomerForm from "./admin/customer/NewCustomerForm";
import NewCompanyForm from "./admin/company/NewCompanyForm";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
  const [client, setClient] = useState("CUSTOMER");

  const handleChange = (e) => {
    setClient(e.target.value);
  };

  const clientForm =
    client === "CUSTOMER" ? (
      <NewCustomerForm text="submit" />
    ) : (
      <NewCompanyForm text="submit" />
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
