import React, { useState, useEffect, Fragment } from "react";
import { Modal, Nav, Button, Badge, Spinner } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { orderProducts } from "../../redux/actions/userActions";

const ModalBag = ({
  user: {
    authenticated,
    credentials: { name, email, userId, role },
    bag,
  },
  UI: { loading },
  orderProducts,
}) => {
  const [chart, setChart] = useState(0);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  let bagLength = bag.length;
  let totalPrice = bag
    .map((bags) => bags.totalPrice)
    .reduce((a, b) => a + b, 0);
  useEffect(() => {
    setChart(bagLength);
    setTotal(totalPrice);
  }, [bagLength, totalPrice]);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  const handleOrderProduct = () => {
    const detailsProducts = {
      name,
      email,
      products: bag,
      transactionId: Math.floor(Math.random() * 1000000000).toString(),
      status: false,
      userId,
      createdAt: new Date().toISOString(),
      total,
    };
    orderProducts(detailsProducts);
  };

  return (
    <Fragment>
      {authenticated ? (
        role === "member" ? (
          <Nav.Link as={Link} to={`/member/order/${userId}`}>
            Hi, {name}
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/admin/order">
            Hi, {name}
          </Nav.Link>
        )
      ) : (
        <Nav.Link as={Link} to="/login" className="font-weight-bold">
          LOG IN
        </Nav.Link>
      )}
      {role === "member" ? (
        <Nav.Link
          style={{
            marginLeft: "auto",
          }}
        >
          <Button
            variant="light"
            className="chart-button"
            style={{ padding: "0 5px", marginTop: "-5px" }}
            onClick={handleOpen}
          >
            <FaShoppingBag />{" "}
            <Badge variant="light" pill>
              {chart}
            </Badge>
          </Button>
        </Nav.Link>
      ) : (
        ""
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h3>Shopping Bag</h3>
          {bagLength > 0 ? (
            bag.map((bags) => {
              return (
                <div className="bags-body">
                  <img
                    src={bags.imageUrl}
                    alt={bags.name}
                    className="image-bags"
                  />
                  <span>{bags.name}</span>
                  <span>
                    {bags.quantity} x Rp.{bags.price}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-center mt-5" style={{ fontSize: "12px" }}>
              KERANJANG BELANJAMU KOSONG. YUK, SEGERA ISI DENGAN PRODUK
              KESUKAANMU!
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="price-block">
            <span>Total Price</span>
            <span>Rp. {total}</span>
          </div>
          <Button
            variant="danger"
            onClick={handleClose}
            block
            className="btn-bag p-2 text-uppercase"
          >
            Continue Shopping
          </Button>
          {bagLength > 0 ? (
            <Button
              variant="light"
              className="btn-bag p-2 text-uppercase"
              block
              onClick={handleOrderProduct}
              disabled={loading}
            >
              ORDER NOW
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
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { orderProducts })(ModalBag);
