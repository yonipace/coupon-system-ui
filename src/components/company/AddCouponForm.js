import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Card,
  Snackbar,
  Alert,
} from "@mui/material";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

const AddCouponForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const coupon = {
      title,
      description,
      category,
      price,
      amount,
      startDate,
      endDate,
    };

    fetch("http://localhost:8080/company/coupons", {
      method: "POST",
      headers: { "Content-Type": "application/json", token: authCtx.token },
      body: JSON.stringify(coupon),
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
        setAlertMessage(data.title + " coupon added successfully!");
        setAlertSeverity("success");
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertMessage(err.message);
        setAlertSeverity("error");
        setShowAlert(true);
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Card
          elevation={6}
          sx={{
            mt: 3,
          }}
        >
          <h2>Add New Coupon</h2>
        </Card>
      </Container>
      <Container maxWidth="sm">
        <Paper elevation={6}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              mt: 3,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={2}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <MenuItem value={"ELECTRICITY"}>Electricity</MenuItem>
                    <MenuItem value={"RESTAURANT"}>Restaurant</MenuItem>
                    <MenuItem value={"HOTEL"}>Hotel</MenuItem>
                    <MenuItem value={"VACATION"}>Vacation</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  label="Amount"
                  variant="outlined"
                  type="number"
                  fullWidth
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Price"
                  variant="outlined"
                  type="number"
                  fullWidth
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Start Date"
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="End Date"
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Coupon
            </Button>
          </Box>
        </Paper>
      </Container>
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

export default AddCouponForm;
