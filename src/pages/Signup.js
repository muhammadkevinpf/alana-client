import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { Button, Spinner } from "react-bootstrap";
import SignupAvatar from "../images/signup-avatar.svg";

import { signUpUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
function Signup({ signUpUser, UI: { loading, errors } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (errors) {
      setError(errors);
    }
  }, [errors]);

  console.log(error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: fullName,
      email,
      password,
      confirmPassword,
    };
    signUpUser(userData, history);
  };

  return (
    <div className="flex-box">
      <img src={SignupAvatar} alt="Login Avatar" className="image-login" />
      <div className="flex-center">
        <div className="form-login">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <h2 className="font-weight-bold">Customer Register</h2>
              <small className="text-center">
                Get ready to enter the world of beautiness
              </small>
            </div>
            <div className="form-group mt-4">
              <label>Name</label>
              <br />
              <input
                type="text"
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-4">
              <label>Email</label>
              <br />
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error ? (
                <small className="text-danger">{error.error}</small>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error ? (
                <small className="text-danger">{error.confirmPassword}</small>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              variant="danger"
              className="btn-bag btn-block pt-3 pb-3 font-weight-bold"
              disabled={loading}
            >
              REGISTER
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
          <p className="text-center">
            Already have an account? Log to your account{" "}
            <Link to="/login" className="font-weight-bold">
              here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signUpUser })(Signup);
