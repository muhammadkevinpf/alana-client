import React, { useEffect, Fragment } from "react";

import { Table } from "react-bootstrap";
import dayjs from "dayjs";
import ReactSkeleton from "react-loading-skeleton";

import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getOrderedProductsByUser } from "../../redux/actions/userActions";

function Order({
  user: { ordered_products },
  service: { loading },
  getOrderedProductsByUser,
}) {
  let { userId } = useParams();

  useEffect(() => {
    getOrderedProductsByUser(userId);
  }, [getOrderedProductsByUser, userId]);

  return (
    <Fragment>
      <h2 className="text-center pt-2 pb-2">Order History</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Order No.</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            ordered_products.map((products, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/member/details/${products.transactionId}`}>
                      {products.transactionId}
                    </Link>
                  </td>
                  <td>{dayjs(products.createdAt).format("DD MMMM YYYY")}</td>
                  <td>Rp. {products.total}</td>
                  <td>
                    {!products.status ? "Belum Dibayar" : "Sudah Dibayar"}
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
              <td>
                <ReactSkeleton count={5} />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  service: state.service,
});

export default connect(mapStateToProps, { getOrderedProductsByUser })(Order);
