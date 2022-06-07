import {
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";

const CustomerCouponTable = (props) => {
  const [coupons, setCoupons] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("/customer/coupons", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result);
      });
  });

  return (
    <Container
      component={Card}
      elevation={6}
      sx={{
        maxWidth: "lg",
        mt: 3,
        p: 3,
        alignItems: "center",
        display: "flex",
      }}
    >
      <TableContainer sx={{ maxHeight: 500 }}>
        <h2>Customer Coupons</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Price ($)</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons.length === 0 ? (
              <h6>no coupons purchased</h6>
            ) : (
              coupons.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CustomerCouponTable;
