import { Card, CardContent, Typography } from "@mui/material";

const CompanyHomePage = (props) => {
  return (
    <Card mt={12} sx={{ "text-align": "left" }}>
      <CardContent>
        <Typography variant="h4" sx={{ m: 1 }}>
          {props.details.name}
        </Typography>
        <Typography variant="h6" sx={{ m: 1 }}>
          Email: {props.details.email}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CompanyHomePage;

{
  /*<Stack direction="row" spacing={2} sx={{ m: 5 }}>
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
    </Stack> */
}
