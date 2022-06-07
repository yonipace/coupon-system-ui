import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CustomerHomePage = (props) => {
  return (
    <Card mt={12} sx={{ "text-align": "left" }}>
      <CardContent>
        <Typography variant="h4" sx={{ m: 1 }}>
          {props.details.firstName + " " + props.details.lastName}
        </Typography>
        <Typography variant="h6" sx={{ m: 1 }}>
          Email: {props.details.email}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CustomerHomePage;
