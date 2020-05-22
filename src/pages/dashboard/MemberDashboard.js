import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/layout/Sidebar";
import Order from "../../components/dashboard/Order";
import OrderDetails from "../../components/dashboard/OrderDetails";
import Appointment from "../../components/dashboard/Appointment";
import { Switch, Route } from "react-router-dom";
function MemberDashboard() {
  return (
    <Container className="pull-down">
      <div className="dashboard-wrapper mt-5">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route exact path="/member/order/:userId/">
              <Order />
            </Route>
            <Route exact path="/member/details/:transactionId">
              <OrderDetails />
            </Route>
            <Route exact path="/member/appointment/:userId">
              <Appointment />
            </Route>
          </Switch>
        </div>
      </div>
    </Container>
  );
}

export default MemberDashboard;
