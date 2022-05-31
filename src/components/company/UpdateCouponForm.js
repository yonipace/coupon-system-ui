import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const UpdateCouponForm = (props) => {
  const [title, setTitle] = useState(props.coupon.title);
  const [description, setDescription] = useState(props.coupon.description);
  const [category, setCategory] = useState(props.coupon.category);
  const [price, setPrice] = useState(props.coupon.price);
  const [amount, setAmount] = useState(props.coupon.amount);
  const [startDate, setStartDate] = useState(props.coupon.startDate);
  const [endDate, setEndDate] = useState(props.coupon.endDate);

  let id = props.coupon.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCoupon = {
      id,
      title,
      description,
      category,
      price,
      amount,
      startDate,
      endDate,
    };
    console.log(updatedCoupon);

    /*Add put HTTP request here */

    props.closeDialog();
  };
  return (
    <form>
      <TextField
        label="Title"
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ m: 2 }}
      ></TextField>
      <TextField
        label="Description"
        variant="standard"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ m: 2 }}
      ></TextField>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 200 }}>
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
          <MenuItem value={"FOOD"}>Food</MenuItem>
        </Select>{" "}
      </FormControl>
      <TextField
        label="Price"
        variant="standard"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        sx={{ m: 2 }}
      ></TextField>
      <TextField
        label="Amount"
        variant="standard"
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        sx={{ m: 2 }}
      ></TextField>

      <TextField
        label="Start Date"
        type="date"
        variant="standard"
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ m: 2 }}
      ></TextField>
      <TextField
        label="End Date"
        variant="standard"
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ m: 2 }}
      ></TextField>
      <Button
        variant="outlined"
        type="submit"
        fullwidth="true"
        size="large"
        onClick={handleSubmit}
        sx={{ ml: 8, mt: 3 }}
      >
        Update Coupon
      </Button>
    </form>
  );
};

export default UpdateCouponForm;
