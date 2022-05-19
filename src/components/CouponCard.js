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

const CouponCard = () => {
  return (
    <Card sx={{ maxWidth: "sm", mt: 3 }} elevation={3} align="left">
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>C</Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShoppingCartIcon />
          </IconButton>
        }
        title="My First Coupon"
        subheader="Coupons & co."
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The first coupon added to the systm. offers 50% your next vacation
          when using this coupon.
          <br />- Category: Vacation
          <br />- amount: 300
          <br />- start date: 10-05-2022
          <br />- End Date: 10-05-2023
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CouponCard;
