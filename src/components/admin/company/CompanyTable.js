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
import UpdateCompany from "./UpdateCompany";
import AddCompany from "./AddCompany";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../../store/auth-context";
import DeleteWarningDialog from "../../company/DeleteWarningDialog";

const CompanyTable = (props) => {
  const [companies, setCompanies] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    fetch("/admin/companies", {
      headers: { "Content-Type": "application/json", token: authCtx.token },
    })
      .then((res) => res.json())
      .then((result) => {
        setCompanies(result);
      });
  });

  const deleteHandler = (e) => {
    console.log("delete clicked");
    console.log(e.currentTarget.value);

    let url = "http://localhost:8080/admin/companies/" + e.currentTarget.value;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", token: authCtx.token },
    }).then(() => {
      /*send confirmation to user */

      console.log("Company Deleted");
    });
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
      <TableContainer sx={{ maxHeight: 500 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          px={2}
        >
          <h2>Companies</h2>
          <AddCompany />
        </Stack>
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
            {companies.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell>
                  <DeleteWarningDialog
                    row={row}
                    onConfirm={deleteHandler}
                    title="delete company"
                  />
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
