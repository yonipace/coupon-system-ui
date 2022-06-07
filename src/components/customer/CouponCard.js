import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import { red, yellow, blue, green, orange, purple } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AuthContext from "../../store/auth-context";
import { useState, useContext } from "react";
import { Alert, Snackbar } from "@mui/material";

const CouponCard = (props) => {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const authCtx = useContext(AuthContext);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  const purchaseHandler = () => {
    /*purchase HTTP request */
    fetch("/customer/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json", token: authCtx.token },
      body: JSON.stringify(props.coupon),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.message);
          });
        }
      })
      .then((data) => {
        setAlertMessage(data.title + " purchased successfully!");
        setAlertSeverity("success");
        setShowAlert(true);
      })
      .catch((err) => {
        setAlertMessage(err.message);
        setAlertSeverity("error");
        setShowAlert(true);
      });
  };

  const avatarColors = {
    electricity: yellow[700],
    restaurant: red[700],
    vacation: orange[700],
    food: blue[700],
    hotel: green[700],
    cars: purple[700],
  };

  return (
    <div>
      <Card sx={{ m: 2, maxWidth: "md", "text-align": "left" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: avatarColors[props.coupon.category.toLowerCase()],
              }}
            >
              {props.coupon.category.slice(0, 1)}
            </Avatar>
          }
          action={
            <Tooltip title="purchase coupon">
              <IconButton onClick={purchaseHandler}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          }
          title={props.coupon.title}
          subheader={props.coupon.category.toLowerCase()}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.coupon.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </CardActions>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Stack spacing={1}>
              <Divider />
              <Typography variant="subtitle1">issued by:</Typography>
              <Divider />
              <Typography variant="secondary">
                Price($): {props.coupon.price}
              </Typography>
              <Divider />
              <Typography variant="secondary">
                Amount: {props.coupon.amount}
              </Typography>
              <Divider />
              <Typography variant="secondary">
                Start Date: {props.coupon.startDate}
              </Typography>
              <Divider />
              <Typography variant="secondary">
                End Date: {props.coupon.endDate}
              </Typography>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          variant="filled"
          onClose={handleCloseAlert}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default CouponCard;
