import { React } from "react";

import {
  Avatar,
  Card,
  IconButton,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { red } from "@mui/material/colors";

const CouponCard = (props) => {
  const clickHandler = () => {
    console.log(props);
    fetch("http://localhost:8080/test/purchase", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props),
    }).then(() => {
      console.log("New Coupon purchased");
    });
  };

  return (
    <Card sx={{ maxWidth: "sm", mt: 3 }} elevation={1} align="left">
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>C</Avatar>}
        action={
          <IconButton onClick={clickHandler}>
            <ShoppingCartIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.company}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
          <br />
          <br />- Category: {props.category}
          <br />
          -Price: {props.price}
          <br />- Amount: {props.amount}
          <br />- Start Date: {props.startDate}
          <br />- End Date: {props.endDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CouponCard;
