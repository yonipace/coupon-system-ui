import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CompanyCouponTable from "../company/CompanyCouponTable";
import PurchaseCouponList from "./PurchaseCouponList";
import { useState } from "react";

const CustomerLayout = (props) => {
  const [isOnHomePage, setIsOnHomePage] = useState(true);

  const shoppingClickHandler = () => {
    setIsOnHomePage(false);
  };
  const homeClickHandler = () => {
    setIsOnHomePage(true);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Local Customer
          </Typography>
          <Tooltip title="Purchase Coupons">
            <IconButton
              size="large"
              color="inherit"
              sx={{ m: 1 }}
              onClick={shoppingClickHandler}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Home">
            <IconButton
              size="large"
              color="inherit"
              sx={{ m: 1 }}
              onClick={homeClickHandler}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Details">
            <IconButton size="large" color="inherit" sx={{ m: 1 }}>
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <div>
        {!isOnHomePage && (
          <PurchaseCouponList
            coupons={props.coupons}
            header="Purchased Coupons"
          />
        )}
        {isOnHomePage && <CompanyCouponTable coupons={props.purchased} />}
      </div>
    </div>
  );
};

export default CustomerLayout;
