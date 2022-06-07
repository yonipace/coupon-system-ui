import { Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import AuthContext from "../../../store/auth-context";

const UpdateCompanyForm = (props) => {
  const [name, setName] = useState(props.company.name);
  const [email, setEmail] = useState(props.company.email);
  const [password, setPassword] = useState(props.company.password);

  const authCtx = useContext(AuthContext);

  let id = props.company.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCompany = {
      id,
      name,
      email,
      password,
    };
    console.log(updatedCompany);

    /*Add put HTTP request here */

    fetch("/admin/companies", {
      method: "PUT",
      headers: { "Content-Type": "application/json", token: authCtx.token },
      body: JSON.stringify(updatedCompany),
    }).then(() => {
      /*send confirmation to user */
    });

    props.closeDialog();
  };
  return (
    <form>
      <TextField
        label="Name"
        variant="standard"
        value={name}
        InputProps={{
          readOnly: true,
        }}
        onChange={(e) => setName(e.target.value)}
        sx={{ m: 2 }}
      ></TextField>
      <TextField
        label="Email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ m: 2 }}
      ></TextField>

      <TextField
        label="Password"
        variant="standard"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        sx={{ m: 2 }}
      ></TextField>

      <Button
        variant="outlined"
        type="submit"
        fullwidth="true"
        size="large"
        onClick={handleSubmit}
        sx={{ ml: 3, mt: 3 }}
      >
        Update Company
      </Button>
    </form>
  );
};

export default UpdateCompanyForm;
