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
import { useContext, useState, useEffect } from "react";
import UpdateCoupon from "./UpdateCoupon";
import DeleteWarningDialog from "./DeleteWarningDialog";
import AuthContext from "../../store/auth-context";

const CompanyCouponTable = () => {
  const [coupons, setCoupons] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("/company/coupons", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCoupons(result);
      });
  });

  const deleteHandler = (e) => {
    let url = "/company/coupons/" + e.currentTarget.value;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", token: authCtx.token },
    }).then(() => {
      /*send confirmation to user */

      console.log("Coupon Deleted");
    });
  };

  return (
    <Container
      component={Card}
      elevation={6}
      sx={{
        maxWidth: "lg",
        p: 3,
        alignItems: "center",
        display: "flex",
      }}
    >
      <TableContainer sx={{ maxHeight: 500 }}>
        <h2>Company Coupons</h2>
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
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>
                  <DeleteWarningDialog
                    row={row}
                    onConfirm={deleteHandler}
                    title="delete coupon"
                  />
                </TableCell>

                <TableCell>
                  <UpdateCoupon row={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CompanyCouponTable;
