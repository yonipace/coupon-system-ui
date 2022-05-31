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
import UpdateCompany from "./UpdateCompany";

const CompanyTable = (props) => {
  const deleteHandler = (e) => {
    console.log("delete clicked");
    console.log(e.currentTarget.value);
  };
  return (
    <Container
      component={Card}
      elevation={6}
      sx={{
        maxWidth: "md",
        mt: 3,
        p: 3,
        alignItems: "center",
        display: "flex",
      }}
    >
      <TableContainer>
        <h2>Companies</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.companies.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell>
                  <Tooltip title="delete company">
                    <IconButton onClick={deleteHandler} value={row.id}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>

                <TableCell>
                  <UpdateCompany row={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CompanyTable;
