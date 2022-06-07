import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SubjectIcon from "@mui/icons-material/Subject";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useState, useEffect, useContext } from "react";
import { Box } from "@mui/system";
import CompanyCouponTable from "./CompanyCouponTable";
import AddCouponForm from "./AddCouponForm";
import CompanyHomePage from "../../pages/CompanyHomePage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const CompanyLayout = () => {
  const [company, setCompany] = useState({});
  const [innerPage, setInnerPage] = useState();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("/company/details", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCompany(result);
      });
  });

  const drawerWidth = 240;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              sx={{ m: 2, ml: 3, flexGrow: 1 }}
              align="justify"
            >
              {company.name}
            </Typography>
            <Button
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
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding sx={{ mt: 2 }}>
                <ListItemButton
                  size="large"
                  component={Link}
                  to="/company/home"
                  onClick={() => {
                    setInnerPage(<CompanyHomePage details={company} />);
                  }}
                >
                  <AccountCircleIcon />
                  <ListItemText primary="Profile" sx={{ ml: 2 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mt: 2 }}>
                <ListItemButton
                  size="large"
                  component={Link}
                  to="/company/coupons"
                  onClick={() => {
                    setInnerPage(<CompanyCouponTable />);
                  }}
                >
                  <SubjectIcon />
                  <ListItemText primary="Coupons" sx={{ ml: 2 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mt: 2 }}>
                <ListItemButton
                  size="large"
                  component={Link}
                  to="/company/add-coupon"
                  onClick={() => {
                    setInnerPage(<AddCouponForm />);
                  }}
                >
                  <AddCircleIcon />
                  <ListItemText primary="Add Coupon" sx={{ ml: 2 }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Container sx={{ mt: 12 }}>{innerPage}</Container>
      </Box>
    </div>
  );
};

export default CompanyLayout;
