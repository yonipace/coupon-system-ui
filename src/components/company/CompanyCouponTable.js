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
import UpdateCoupon from "./UpdateCoupon";
import DeleteWarningDialog from "./DeleteWarningDialog";

const CompanyCouponTable = (props) => {
  const deleteHandler = (e) => {
    console.log("delete clicked");
    console.log(e.currentTarget.value);
    /*add HTTP request - delete by id */
  };

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
        <h2>{props.header}</h2>
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
            {props.coupons.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>
                  <DeleteWarningDialog row={row} onConfirm={deleteHandler} />
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
