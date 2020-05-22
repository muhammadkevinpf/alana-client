import React, { useEffect, Fragment } from "react";

import { Table, Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

import {
  getDetailOrderedProductsByUser,
  payProducts,
} from "../../redux/actions/userActions";

function OrderDetails({
  user: { ordered_products },
  UI: { loading },
  getDetailOrderedProductsByUser,
  payProducts,
}) {
  let { transactionId } = useParams();
  let product = [];
  let total = 0;
  let paid = false;
  useEffect(() => {
    getDetailOrderedProductsByUser(transactionId);
  }, [getDetailOrderedProductsByUser, transactionId]);
  if (ordered_products.length > 0) {
    product = ordered_products[0].products;
    total = ordered_products[0].products
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);
    paid = ordered_products[0].status;
  }

  const handleClick = () => {
    payProducts(transactionId);
    if (!loading) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  return (
    <Fragment>
      <h2 className="text-center pt-2 pb-2">Order Details</h2>
      <Table responsive>
        <tbody>
          {product.map((prod, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="image-bags"
                  />
                </td>
                <td style={{ verticalAlign: "middle" }}>{prod.name}</td>
                <td
                  style={{ verticalAlign: "middle" }}
                >{`${prod.quantity} x Rp. ${prod.totalPrice}`}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2" className="font-weight-bold text-center">
              Total
            </td>
            <td className="font-weight-bold">Rp. {total}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              {paid ? (
                <Button
                  variant="success"
                  onClick={handleClick}
                  className="btn-bag float-right p-2"
                  disabled
                >
                  Sudah Bayar
                </Button>
              ) : (
                <Button
                  variant="danger"
                  onClick={handleClick}
                  className="btn-bag float-right p-2"
                  disabled={loading}
                >
                  Bayar
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
              )}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = { getDetailOrderedProductsByUser, payProducts };

export default connect(mapStateToProps, mapActionsToProps)(OrderDetails);
