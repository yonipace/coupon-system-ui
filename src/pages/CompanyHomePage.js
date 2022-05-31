import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CompanyHomePage = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ m: 5 }}>
      <Button
        size="large"
        variant="contained"
        component={Link}
        to="/company/coupons"
      >
        Coupons
      </Button>
      <Button
        size="large"
        variant="contained"
        component={Link}
        to="/company/add-coupon"
      >
        Add Coupon
      </Button>
    </Stack>
  );
};
export default CompanyHomePage;
