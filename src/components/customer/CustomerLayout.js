import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SubjectIcon from "@mui/icons-material/Subject";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../store/auth-context";
import CustomerHomePage from "../../pages/CustomerHomePage";
import CustomerCouponTable from "./CustomerCouponTable";
import CouponPurchase from "./CouponPurchase";

const CustomerLayout = () => {
  const [customer, setCustomer] = useState({});
  const [innerPage, setInnerPage] = useState();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("/customer/details", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCustomer(result);
      });
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ mt: 2, ml: 3, flexGrow: 1 }}
            align="justify"
          >
            {customer.firstName + " " + customer.lastName}
          </Typography>
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            onClick={() => {
              authCtx.logout();
            }}
            component={Link}
            to="/"
          >
            Logout
          </Button>
        </Toolbar>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              size="large"
              component={Link}
              to="/customer/home"
              onClick={() => {
                setInnerPage(<CustomerHomePage details={customer} />);
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<SubjectIcon />}
              size="large"
              component={Link}
              to="/customer/coupons"
              onClick={() => {
                setInnerPage(<CustomerCouponTable />);
              }}
            >
              Purchased Coupons
            </Button>
            <Button
              color="inherit"
              startIcon={<AddShoppingCartIcon />}
              size="large"
              component={Link}
              to="/customer/purchase"
              onClick={() => {
                setInnerPage(<CouponPurchase />);
              }}
            >
              Purchase New Coupon
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ my: 3, mx: 8 }}>{innerPage}</Box>
    </div>
  );
};

export default CustomerLayout;
