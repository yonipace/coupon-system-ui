import {
  Card,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import UpdateCustomer from "./UpdateCustomer";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../store/auth-context";
import AddCustomer from "./AddCustomer";
import DeleteWarningDialog from "../../company/DeleteWarningDialog";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:8080/admin/customers", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCustomers(result);
      });
  });

  const deleteHandler = (e) => {
    let url = "http://localhost:8080/admin/customers/" + e.currentTarget.value;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", token: authCtx.token },
    }).then(() => {
      /*send confirmation to user */

      console.log("Customer Deleted");
    });
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
      <TableContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          px={2}
        >
          <h2>Customers</h2>
          <AddCustomer />
        </Stack>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell>
                  <DeleteWarningDialog
                    row={row}
                    onConfirm={deleteHandler}
                    title="delete customer"
                  />
                </TableCell>
                <TableCell>
                  <UpdateCustomer row={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CustomerTable;
