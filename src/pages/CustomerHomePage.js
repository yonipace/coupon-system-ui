import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CustomerHomePage = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ m: 5 }}>
      <Button
        size="large"
        variant="contained"
        component={Link}
        to="/customer/coupons"
      >
        purchased coupons
      </Button>
      <Button
        size="large"
        variant="contained"
        component={Link}
        to="/customer/purchase"
      >
        Purchase New Coupon
      </Button>
    </Stack>
  );
};
export default CustomerHomePage;
