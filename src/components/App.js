import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Dashboard from "./dashboard";
import Login from "./Login";
import SignUp from "./SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  const login = async (data) => {
    console.log("logging in with ", data.email, data.psw);
    await new Promise((r) => setTimeout(r, 1000));
    if (data.email === "abc@g.com" && data.psw === "123") {
      setIsAuthenticated(true);
      history.push("/");
    }
  };

  const signup = async (data) => {
    console.log("logging in with ", data.email, data.psw);
    await new Promise((r) => setTimeout(r, 1000));

    setIsAuthenticated(true);
    history.push("/");
  };

  return (
    <div class="App">
      {/**YOUR CODE START HERE**/}
      <header>
        <div>Relevel</div>
        <div>
          {isAuthenticated ? (
            <button>Logout</button>
          ) : (
            <div>
              <Link to="signup">Signup</Link>
              {"  "}
              <Link to="login">Login</Link>
            </div>
          )}
        </div>
      </header>
      <main>
        <Switch>
          <PrivateRoute exact path="/" {...{ isAuthenticated }}>
            <Dashboard />
          </PrivateRoute>

          <Route path="/login">
            <Login {...{ login }} />
          </Route>
          <Route path="/signup">
            <SignUp {...{ signup }} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const PrivateRoute = ({ children, path, isAuthenticated, ...props }) => {
  if (isAuthenticated) {
    return (
      <Route path={path} {...props}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to="/login"></Redirect>;
  }
};

const PublicRoute = ({ children, path, isAuthenticated, ...props }) => {
  if (!isAuthenticated) {
    return (
      <Route path={path} {...props}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to="/"></Redirect>;
  }
};

export default App;
