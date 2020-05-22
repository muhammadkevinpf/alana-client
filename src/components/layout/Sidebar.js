import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { FaRegClipboard } from "react-icons/fa";
import { MdBook } from "react-icons/md";
import { IoIosLogOut, IoIosArrowDown } from "react-icons/io";
import { connect } from "react-redux";
import ReactSkeleton from "react-loading-skeleton";
import { logoutUser } from "../../redux/actions/userActions";
function Sidebar({
  user: {
    credentials: { email, name, role, userId },
    loading,
  },
  logoutUser,
}) {
  const [show, setShow] = useState(false);
  const [classMobile, setClassMobile] = useState("display-none");
  const handleClick = () => {
    logoutUser();
  };

  const handleMobileClick = () => {
    if (show) {
      setClassMobile("display-none");
      setShow(false);
    } else {
      setClassMobile("display-block");
      setShow(true);
    }
  };

  return (
    <div className="sidebar">
      {!loading ? (
        <div className="sidebar-user mb-3">
          {role === "member" ? (
            <Fragment>
              <h5 className="font-weight-bold">{name}</h5>
              <p>{email}</p>
            </Fragment>
          ) : (
            <h5 className="font-weight-bold">Admin</h5>
          )}

          <span className="sidebar-mobile-menu" onClick={handleMobileClick}>
            <IoIosArrowDown />
          </span>
        </div>
      ) : (
        <div className="sidebar-user mb-3">
          <ReactSkeleton count={2} />
        </div>
      )}
      <div className={`sidebar-nav ${classMobile}`}>
        <ul>
          <li>
            <Link
              to={
                role === "member" ? `/member/order/${userId}` : "/admin/order"
              }
              className="link-text"
            >
              <span className="icons-sidebar">
                <FaRegClipboard />
              </span>{" "}
              Order History
            </Link>
          </li>
          <li>
            <Link
              to={
                role === "member"
                  ? `/member/appointment/${userId}`
                  : "/admin/appointment"
              }
              className="link-text"
            >
              <span className="icons-sidebar">
                <MdBook />
              </span>
              Appointment
            </Link>
          </li>
          <li onClick={handleClick} style={{ cursor: "pointer" }}>
            <span className="icons-sidebar">
              <IoIosLogOut />
            </span>
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(Sidebar);
