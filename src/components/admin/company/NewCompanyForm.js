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

const NewCompanyForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      name,
      email,
      password,
    };
    console.log(customer);

    setName("");
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
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            value={name}
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

export default NewCompanyForm;
