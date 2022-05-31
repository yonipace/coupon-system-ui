import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";

const NewCustomerForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(customer);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
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
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></TextField>
        </Grid>
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
      <Button
        size="large"
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
      >
        {props.text}
      </Button>
    </Box>
  );
};

export default NewCustomerForm;
