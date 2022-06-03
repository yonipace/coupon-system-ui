import { useContext, useState, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import CompanyCouponTable from "./CompanyCouponTable";

const CouponsPage = () => {
  const [coupons, setCoupons] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/company/coupons", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result);
      });
  });

  return <CompanyCouponTable coupons={coupons} header="Company Coupons" />;
};

export default CouponsPage;
