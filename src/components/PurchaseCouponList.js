import { Container, Grid, List, Paper } from "@mui/material";
import CouponCard from "./CouponCard";

const PurchaseCouponList = (coupons) => {
  return (
    <Container
      sx={{
        mt: 5,
        alignItems: "center",
        display: "flex",
      }}
    >
      <Paper elevation={3}>
        <h2>All Coupons</h2>
        <List>
          <Grid container spacing={2} sx={{ p: 3, maxWidth: "lg" }}>
            {coupons.coupons.map((coupon) => (
              <Grid item md={6} xs={12}>
                <CouponCard
                  id={coupon.id}
                  title={coupon.title}
                  description={coupon.description}
                  company={coupon.company}
                  category={coupon.category}
                  price={coupon.price}
                  amount={coupon.amount}
                  startDate={coupon.startDate}
                  endDate={coupon.endDate}
                />
              </Grid>
            ))}
          </Grid>
        </List>
      </Paper>
    </Container>
  );
};

export default PurchaseCouponList;
