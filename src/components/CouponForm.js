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

const CouponForm = () => {
  const handleSubmit = (e) => {};

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
                id="title"
                label="Title"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                >
                  <MenuItem value={10}>Electricity</MenuItem>
                  <MenuItem value={20}>Restaurant</MenuItem>
                  <MenuItem value={30}>Hotel</MenuItem>
                  <MenuItem value={40}>Vacation</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="price"
                label="Price"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="startDate"
                label="Start Date"
                type="date"
                defaultValue="2022-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="endDate"
                label="End Date"
                type="date"
                defaultValue="2023-05-24"
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
        ;
      </Paper>
    </Container>
  );
};

export default CouponForm;
