import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SubjectIcon from "@mui/icons-material/Subject";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useState, useEffect, useContext } from "react";

const CompanyLayout = () => {
  const [company, setCompany] = useState({});

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/company/details", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCompany(result);
      });
  });
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h5" sx={{ mt: 2, ml: 3 }} align="justify">
          {company.name}
        </Typography>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              size="large"
              component={Link}
              to="/company/home"
            >
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<SubjectIcon />}
              size="large"
              component={Link}
              to="/company/coupons"
            >
              Coupons
            </Button>
            <Button
              color="inherit"
              startIcon={<AddCircleIcon />}
              size="large"
              component={Link}
              to="/company/add-coupon"
            >
              Create New Coupon
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CompanyLayout;
