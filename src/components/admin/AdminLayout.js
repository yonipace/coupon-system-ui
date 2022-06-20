import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import SubjectIcon from "@mui/icons-material/Subject";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import AdminHomePage from "../../pages/AdminHomePage";
import CompanyTable from "./company/CompanyTable";
import CustomerTable from "./customer/CustomerTable";
import CouponPurchase from "../customer/CouponPurchase";

const AdminLayout = () => {
  const [innerPage, setInnerPage] = useState();
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ mt: 2, ml: 3, flexGrow: 1 }}
            align="justify"
          >
            Administrator
          </Typography>
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            onClick={() => {
              authCtx.logout();
            }}
            component={Link}
            to="/"
          >
            Logout
          </Button>
        </Toolbar>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              size="large"
              onClick={() => {
                setInnerPage(<AdminHomePage />);
              }}
              component={Link}
              to="/admin/home"
            >
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<BusinessIcon />}
              size="large"
              onClick={() => {
                setInnerPage(<CompanyTable />);
              }}
              component={Link}
              to="/admin/companies"
            >
              Companies
            </Button>
            <Button
              color="inherit"
              startIcon={<PeopleIcon />}
              size="large"
              onClick={() => {
                setInnerPage(<CustomerTable />);
              }}
              component={Link}
              to="/admin/customers"
            >
              Customers
            </Button>
            <Button
              color="inherit"
              startIcon={<SubjectIcon />}
              size="large"
              onClick={() => {
                setInnerPage(<CouponPurchase />);
              }}
              component={Link}
              to="/admin/coupons"
            >
              COupons
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container>{innerPage}</Container>
    </div>
  );
};

export default AdminLayout;
