import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack>
      <Button component={Link} to="/login">
        Login
      </Button>
      <Button component={Link} to="/signup">
        SignUp
      </Button>
      <Button component={Link} to="/admin">
        Admin
      </Button>
      <Button component={Link} to="/company">
        Comapany
      </Button>
      <Button component={Link} to="/customer">
        Customer
      </Button>
    </Stack>
  );
};
export default Home;
