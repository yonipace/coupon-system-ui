import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ m: 5 }}>
      <Button
        size="large"
        variant="contained"
        component={Link}
        to="/admin/companies"
      >
        Companies
      </Button>
      <Button
        size="large"
        variant="contained"
        component={Link}
        to="/admin/customers"
      >
        Customers
      </Button>
    </Stack>
  );
};
export default AdminHomePage;
