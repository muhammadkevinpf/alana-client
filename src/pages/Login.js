import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import LoginAvatar from "../images/login-avatar.svg";
import { loginUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
function Login({ loginUser, UI: { loading, errors } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  let history = useHistory();

  useEffect(() => {
    if (errors) {
      setError(errors);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };
    loginUser(userData, history);
  };

  return (
    <div className="flex-box">
      <img src={LoginAvatar} alt="Login Avatar" className="image-login" />
      <div className="flex-center">
        <div className="form-login">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <h2 className="font-weight-bold">Customer Login</h2>
              <small className="text-center">
                Get ready to enter the world of beautiness
              </small>
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
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <small className="text-danger font-weight-bold">
              {error.general}
            </small>
            <Button
              type="submit"
              variant="danger"
              className="btn-bag btn-block pt-3 pb-3 font-weight-bold mt-2"
              disabled={loading}
            >
              LOG IN
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
            Not have an account? Create your account{" "}
            <Link to="/sign-up" className="font-weight-bold">
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

export default connect(mapStateToProps, { loginUser })(Login);
