import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import jwtDecode from "jwt-decode";
import axios from "axios";
// pages
import Home from "./pages/home";
import clinic from "./pages/clinic";
import about from "./pages/about";
import Service from "./pages/Servis";
import DetailTreatments from "./pages/DetailTreatments";
import DetailProducts from "./pages/DetailProducts";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MemberDashboard from "./pages/dashboard/MemberDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import PrivateRoute from "./util/PrivateRoute";
//component
import NavigationBar from "./components/layout/NavigationBar";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

axios.defaults.baseURL =
  "https://us-central1-alana-clinic.cloudfunctions.net/api";

const token = localStorage.userToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/clinic" component={clinic} />
            <Route exact path="/about" component={about} />
            <Route exact path="/treatments/:category" component={Service} />
            <Route exact path="/products/:category" component={Service} />
            <Route
              exact
              path="/treatments/:category/:details"
              component={DetailTreatments}
            />
            <Route
              exact
              path="/products/:category/:details"
              component={DetailProducts}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={Signup} />
            <PrivateRoute path="/member/order/:userId">
              <MemberDashboard />
            </PrivateRoute>
            <PrivateRoute path="/member/details/:transactionId">
              <MemberDashboard />
            </PrivateRoute>
            <PrivateRoute path="/member/appointment/:userId">
              <MemberDashboard />
            </PrivateRoute>
            {/* admin */}

            <PrivateRoute path="/admin/order">
              <AdminDashboard />
            </PrivateRoute>
            <PrivateRoute path="/admin/order/:transactionId">
              <AdminDashboard />
            </PrivateRoute>
            <PrivateRoute path="/admin/appointment">
              <AdminDashboard />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
