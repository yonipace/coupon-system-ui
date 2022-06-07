import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  Link as MUILink,
} from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h3" mt={1}>
              Coupon Management System
            </Typography>
            <Typography variant="h5" mt={6}>
              Welcome! <br /> What would you like to do?
            </Typography>
            <Stack
              direction="row"
              spacing={4}
              my={2}
              mb={12}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                size="large"
                variant="outlined"
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                size="large"
                variant="outlined"
                component={Link}
                to="/signup"
              >
                SignUp
              </Button>
              <Button
                size="large"
                variant="outlined"
                component={Link}
                //  to="/signup"
              >
                Get A Demo
              </Button>
            </Stack>
          </CardContent>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="body2">
                Final project for Java-Full Stack course at John Bryce college.
              </Typography>
              <Button
                endIcon={<GitHubIcon />}
                size="small"
                variant="outlined"
                component={MUILink}
                href="https://github.com/yonipace/coupon-management-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                get the Source code
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default Home;
