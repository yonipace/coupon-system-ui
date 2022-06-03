import "./App.css";
import CustomerLayout from "./components/customer/CustomerLayout";
import AddCouponForm from "./components/company/AddCouponForm";
import CompanyLayout from "./components/company/CompanyLayout";
import AdminLayout from "./components/admin/AdminLayout";
import SignUp from "./components/SignUp";
import Login from "./pages/Login";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CouponsPage from "./components/company/CouponsPage";
import CompanyHomePage from "./pages/CompanyHomePage";
import CustomerHomePage from "./pages/CustomerHomePage";
import CustomerCouponTable from "./components/customer/CustomerCouponTable";
import CouponPurchase from "./components/customer/CouponPurchase";
import CompanyTable from "./components/admin/company/CompanyTable";
import CustomerTable from "./components/admin/customer/CustomerTable";
import AdminHomePage from "./pages/AdminHomePage";

function App() {
  return (
    <div className="App">
      <Switch>
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
          <Redirect to="/customer/home" />
        </Route>
        <Route path="/admin">
          <AdminLayout />
        </Route>
      </Switch>

      {/*nested admin routes */}
      <Route path="/admin/home">
        <AdminHomePage />
      </Route>
      <Route path="/admin/companies">
        <CompanyTable />
      </Route>
      <Route path="/admin/customers">
        <CustomerTable />
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

      {/*nested customer routes */}
      <Route path="/customer/home">
        <CustomerHomePage />
      </Route>
      <Route path="/customer/coupons">
        <CustomerCouponTable />
      </Route>
      <Route path="/customer/purchase">
        <CouponPurchase />
      </Route>
    </div>
  );
}

export default App;
