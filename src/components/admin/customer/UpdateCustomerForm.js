import { Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import AuthContext from "../../../store/auth-context";

const UpdateCustomerForm = (props) => {
  const [firstName, setFirstName] = useState(props.customer.firstName);
  const [lastName, setLastName] = useState(props.customer.lastName);
  const [email, setEmail] = useState(props.customer.email);
  const [password, setPassword] = useState(props.customer.password);

  const authCtx = useContext(AuthContext);

  let id = props.customer.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCustomer = {
      id,
      firstName,
      lastName,
      email,
      password,
    };
    console.log(updatedCustomer);

    fetch("/admin/customers", {
      method: "PUT",
      headers: { "Content-Type": "application/json", token: authCtx.token },
      body: JSON.stringify(updatedCustomer),
    }).then(() => {
      /*send confirmation to user */
    });

    props.closeDialog();
  };
  return (
    <form>
      <TextField
        label="First Name"
        variant="standard"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        sx={{ m: 2 }}
      ></TextField>
      <TextField
        label="Last Name"
        variant="standard"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
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
        Update Customer
      </Button>
    </form>
  );
};

export default UpdateCustomerForm;
