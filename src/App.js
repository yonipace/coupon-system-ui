import { useEffect, useState } from "react";
import "./App.css";
import CustomerLayout from "./components/customer/CustomerLayout";
import AddCouponForm from "./components/company/AddCouponForm";
import CompanyLayout from "./components/company/CompanyLayout";
import AdminLayout from "./components/admin/AdminLayout";
import SignUp from "./components/SignUp";
import Login from "./pages/Login";
import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import CouponsPage from "./components/company/CouponsPage";
import CompanyHomePage from "./pages/CompanyHomePage";

function App() {
  const [coupons, setCoupons] = useState();
  const [customerCoupons, setCustomerCoupons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/test/getCoupons")
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result);
      });
  });
  useEffect(() => {
    fetch("http://localhost:8080/test/getCustomerCoupons")
      .then((res) => res.json())
      .then((result) => {
        setCustomerCoupons(result);
      });
  });

  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/company">
        <CompanyLayout />
        <Redirect to="/company/home" />
      </Route>
      <Route path="/customer">
        <CustomerLayout />
      </Route>
      <Route path="/admin">
        <AdminLayout />
      </Route>

      {/*nested company routes */}
      <Route path="/company/home">
        <CompanyHomePage />
      </Route>
      <Route path="/company/coupons">
        <CouponsPage />
      </Route>
      <Route path="/company/add-coupon">
        <AddCouponForm />
      </Route>
    </div>
  );
}

export default App;
