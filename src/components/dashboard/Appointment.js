import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table, Button, Modal, Spinner } from "react-bootstrap";
import dayjs from "dayjs";
import ReactSkeleton from "react-loading-skeleton";
import {
  bookAppointment,
  getBookedAppointment,
} from "../../redux/actions/userActions";

const Appointment = ({
  user: { appointment },
  UI: { loading },
  service,
  bookAppointment,
  getBookedAppointment,
}) => {
  const [show, setShow] = useState(false);
  const [dokter, setDokter] = useState("");
  const [tanggal, setTanggal] = useState("");
  useEffect(() => {
    getBookedAppointment();
  }, [getBookedAppointment]);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookDetails = {
      doctor: dokter,
      appointmentDate: tanggal,
      createdAt: new Date().toISOString(),
    };
    bookAppointment(bookDetails);
    if (!loading) {
      setTimeout(() => {
        getBookedAppointment();
        setShow(false);
        setDokter("");
        setTanggal("");
      }, 2000);
    }
  };

  const handleChangeDokter = (event) => {
    setDokter(event.target.value);
  };

  const handleChangeTanggal = (event) => {
    setTanggal(event.target.value);
  };

  return (
    <Fragment>
      <h2 className="text-center pt-3">Appointment List</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
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
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right">
              <Button variant="danger" className="btn-bag" onClick={handleOpen}>
                Book
              </Button>
            </td>
          </tr>
        </tfoot>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Dokter</label>
              <select
                name="dokter"
                className="form-control"
                onChange={handleChangeDokter}
              >
                <option value="">Pilih Dokter</option>
                <option value="Asep">Asep - Acne</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tanggal Appointment</label>
              <input
                type="date"
                name="tanggal"
                className="form-control"
                required
                min={dayjs(new Date().toISOString()).format("YYYY-MM-DD")}
                value={tanggal}
                onChange={handleChangeTanggal}
              />
            </div>
            <Button
              type="submit"
              variant="danger"
              className="btn-bag"
              block
              disabled={loading}
            >
              Send
              {loading ? (
                <Spinner
                  variant="dark"
                  className="spinner-absolute"
                  animation="border"
                />
              ) : (
                ""
              )}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
  service: state.service,
});

const mapDispatchToProps = {
  bookAppointment,
  getBookedAppointment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
