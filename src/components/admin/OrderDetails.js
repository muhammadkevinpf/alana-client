import React, { useEffect, Fragment } from "react";

import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

import { getDetailOrderedProductsByUser } from "../../redux/actions/userActions";

function OrderDetails({
  user: { ordered_products },
  getDetailOrderedProductsByUser,
}) {
  let { transactionId } = useParams();
  let product = [];
  let total = 0;
  let name, email;
  useEffect(() => {
    getDetailOrderedProductsByUser(transactionId);
  });
  if (ordered_products.length > 0) {
    name = ordered_products[0].name;
    email = ordered_products[0].email;
    product = ordered_products[0].products;
    total = ordered_products[0].products
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);
  }
  return (
    <Fragment>
      <p className="pl-3">Customer Name : {name}</p>
      <p className="pl-3">Email : {email}</p>
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
      </Table>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getDetailOrderedProductsByUser })(
  OrderDetails
);
