import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCouponForm from "./AddCouponForm";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { useState } from "react";
import CouponTable from "../CouponTable";

const CompanyLayout = () => {
  const [isOnHomePage, setIsOnHomePage] = useState(true);

  const addCouponClickHandler = () => {
    setIsOnHomePage(false);
  };
  const homeClickHandler = () => {
    setIsOnHomePage(true);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="justify"
          >
            Company and co.
          </Typography>
          <Tooltip title="Add New Coupon">
            <IconButton
              size="large"
              color="inherit"
              sx={{ m: 1 }}
              onClick={addCouponClickHandler}
            >
              <AddBusinessIcon />
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
        {!isOnHomePage && <AddCouponForm />}
        {isOnHomePage && (
          <CouponTable coupons={dummyCoupons} header="Company Coupons" />
        )}
      </div>
    </div>
  );
};

export default CompanyLayout;

const dummyCoupons = [
  {
    id: 1,
    category: "FOOD",
    title: "Electronics",
    description: "Enormous Aluminum Bench",
    startDate: "2022-01-01",
    endDate: "2022-03-16",
    amount: 59,
    price: 11.73,
    company: "jacobs & co",
  },
  {
    id: 2,
    category: "ELECTRICITY",
    title: "Movies, Outdoors & Tools",
    description: "Enormous Marble Table",
    startDate: "2022-01-01",
    endDate: "2022-02-25",
    amount: 49,
    price: 66.12,
    company: "jacobs & co",
  },
  {
    id: 3,
    category: "VACATION",
    title: "Grocery & Kids",
    description: "Ergonomic Granite Table",
    startDate: "2022-01-01",
    endDate: "2022-02-25",
    amount: 50,
    price: 86.4,
    company: "jacobs & co",
  },
  {
    id: 4,
    category: "ELECTRICITY",
    title: "Games & Outdoors",
    description: "Practical Leather Wallet",
    startDate: "2022-01-01",
    endDate: "2022-03-21",
    amount: 19,
    price: 21.12,
    company: "gusikowski LTD",
  },
  {
    id: 5,
    category: "VACATION",
    title: "Books",
    description: "Durable Concrete Hat",
    startDate: "2022-01-01",
    endDate: "2022-02-11",
    amount: 56,
    price: 29.3,
    company: "gusikowski LTD",
  },
  {
    id: 6,
    category: "FOOD",
    title: "Outdoors",
    description: "Rustic Leather Bench",
    startDate: "2022-01-01",
    endDate: "2022-03-18",
    amount: 12,
    price: 36.28,
    company: "gusikowski LTD",
  },
];
