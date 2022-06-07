import { Container, Grid, List, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import CouponCard from "./CouponCard";

const CouponPurchase = () => {
  const [coupons, setCoupons] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("/customer/all-coupons", {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result);
      });
  });

  return (
    <div>
      <List>
        <Grid container sx={{ px: 8 }}>
          {coupons.map((coupon) => (
            <Grid item md={4} sm={6} xs={12}>
              <CouponCard coupon={coupon} />
            </Grid>
          ))}
        </Grid>
      </List>
    </div>
  );
};

export default CouponPurchase;
