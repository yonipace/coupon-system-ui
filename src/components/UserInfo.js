import {
  AppBar,
  Card,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const UserInfo = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" flex={1}>
            Customer no 1/
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Card elevation={5} sx={{ mt: 3, maxWidth: "sm" }}>
          <Typography variant="h6">Details</Typography>
          <Typography variant="p">Michael Jordan</Typography>
          <Typography variant="p">
            <br /> michael@jordan.com
          </Typography>
        </Card>
      </Container>
    </div>
  );
};

export default UserInfo;
