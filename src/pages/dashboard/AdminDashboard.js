import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/layout/Sidebar";
import Order from "../../components/admin/Order";
import OrderDetails from "../../components/admin/OrderDetails";
import Appointment from "../../components/admin/Appointment";
import { Switch, Route } from "react-router-dom";
function AdminDashboard() {
  return (
    <Container className="pull-down">
      <div className="dashboard-wrapper mt-5">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route exact path="/admin/order">
              <Order />
            </Route>
            <Route exact path="/admin/order/:transactionId">
              <OrderDetails />
            </Route>
            <Route exact path="/admin/appointment">
              <Appointment />
            </Route>
          </Switch>
        </div>
      </div>
    </Container>
  );
}

export default AdminDashboard;
