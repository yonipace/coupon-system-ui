import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SubjectIcon from "@mui/icons-material/Subject";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../store/auth-context";

const CustomerLayout = () => {
  const [customer, setCustomer] = useState({});

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/customer/details", {
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
        <Typography variant="h5" sx={{ mt: 2, ml: 3 }} align="justify">
          {customer.firstName + " " + customer.lastName}
        </Typography>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              size="large"
              component={Link}
              to="/customer/home"
            >
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<SubjectIcon />}
              size="large"
              component={Link}
              to="/customer/coupons"
            >
              Purchased Coupons
            </Button>
            <Button
              color="inherit"
              startIcon={<AddShoppingCartIcon />}
              size="large"
              component={Link}
              to="/customer/purchase"
            >
              Purchase New Coupon
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomerLayout;
