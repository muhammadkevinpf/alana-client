import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
function PrivateRoute({ children, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (authenticated === true ? children : <Redirect to="/" />)}
    ></Route>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
