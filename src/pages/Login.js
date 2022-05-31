import {
  TextField,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
} from "@mui/material";
import { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link as RouterLink } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [client, setClient] = useState("CUSTOMER");

  const authCtx = useContext(AuthContext);

  const handleChange = (e) => {
    setClient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
      client,
    };
    console.log(credentials);

    /*send HTTP request */

    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.token);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getHandler = () => {
    fetch("http://localhost:8080/admin/companies", {
      headers: { token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

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
          <h3>Login</h3>
        </Card>
      </Container>

      <Container maxWidth="xs">
        <Card elevation={3} sx={{ p: 2 }}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></TextField>
              </Grid>
            </Grid>
            <FormControl sx={{ mt: 2 }}>
              <RadioGroup row onChange={handleChange} value={client}>
                <FormControlLabel
                  value="CUSTOMER"
                  control={<Radio />}
                  label="Customer"
                  sx={{ mr: 10 }}
                />
                <FormControlLabel
                  value="COMPANY"
                  control={<Radio />}
                  label="Company"
                />
              </RadioGroup>
            </FormControl>
            <Button
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
            <Button
              size="large"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={getHandler}
            >
              GetCompanies
            </Button>
          </Box>
          <Link component={RouterLink} to="/signup" underline="hover">
            First time? click here to sign up
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
