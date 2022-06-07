import "./App.css";
import CustomerLayout from "./components/customer/CustomerLayout";
import CompanyLayout from "./components/company/CompanyLayout";
import AdminLayout from "./components/admin/AdminLayout";
import SignUp from "./components/SignUp";
import Login from "./pages/Login";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A673E7",
    },
    secondary: {
      main: "#286aa6",
    },
    warning: {
      main: "#ffc400",
    },
    background: {
      default: "#d7e4e6",
      paper: "#1C0935",
    },
    divider: "#bdbdbd",
  },
  typography: {
    fontFamily: "Signika",
    button: {
      fontFamily: "Signika",
    },
  },
});

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/admin">
            {authCtx.isLoggedIn && authCtx.client === "ADMIN" && (
              <AdminLayout />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/company">
            {authCtx.isLoggedIn && authCtx.client === "COMPANY" && (
              <CompanyLayout />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/customer">
            {authCtx.isLoggedIn && authCtx.client === "CUSTOMER" && (
              <CustomerLayout />
            )}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
