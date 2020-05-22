import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import dayjs from "dayjs";
import ReactSkeleton from "react-loading-skeleton";
import { getAllBookedAppointment } from "../../redux/actions/userActions";

const Appointment = ({
  user: { appointment },
  service,
  getAllBookedAppointment,
}) => {
  useEffect(() => {
    getAllBookedAppointment();
  }, [getAllBookedAppointment]);

  return (
    <Fragment>
      <h2 className="text-center pt-3">Appointment List</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Customer Name</th>
            <th>Doctor Name</th>
            <th>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {!service.loading ? (
            appointment.map((appointments, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{appointments.patient}</td>
                  <td>{appointments.doctor}</td>
                  <td>
                    {dayjs(appointments.appointmentDate).format("DD MMMM YYYY")}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                <ReactSkeleton count={5} />
              </td>
              <td>
                <ReactSkeleton count={5} />
              </td>
              <td>
                <ReactSkeleton count={5} />
              </td>
              <td>
                <ReactSkeleton count={5} />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
  service: state.service,
});

export default connect(mapStateToProps, { getAllBookedAppointment })(
  Appointment
);
