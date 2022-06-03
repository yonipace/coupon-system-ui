import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h5" sx={{ mt: 2, ml: 3 }} align="justify">
          Administrator
        </Typography>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              size="large"
              component={Link}
              to="/admin/home"
            >
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<BusinessIcon />}
              size="large"
              component={Link}
              to="/admin/companies"
            >
              Companies
            </Button>
            <Button
              color="inherit"
              startIcon={<PeopleIcon />}
              size="large"
              component={Link}
              to="/admin/customers"
            >
              Customers
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminLayout;
