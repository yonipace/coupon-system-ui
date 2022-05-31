import {
  Card,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateCustomer from "./UpdateCustomer";

const CustomerTable = (props) => {
  const deleteHandler = (e) => {
    console.log("delete clicked");
    console.log(e.currentTarget.value);
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
        <h2>Customers</h2>
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
            {props.customers.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell>
                  <Tooltip title="delete customer">
                    <IconButton onClick={deleteHandler} value={row.id}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
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
