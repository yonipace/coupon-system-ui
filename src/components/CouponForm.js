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
} from "@mui/material";
import { useState } from "react";

const CouponForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
    console.log(coupon);

    fetch("http://localhost:8080/test/addCoupon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coupon),
    }).then(() => {
      console.log("New Coupon added");
    });
  };

  return (
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
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add New Coupon
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CouponForm;
