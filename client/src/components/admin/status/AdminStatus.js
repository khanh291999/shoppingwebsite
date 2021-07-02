import React, { Component } from "react";
import axios from "axios";
import AdminStatusRow from "./AdminStatusRow";
import { AdminEmptyStatus } from "./AdminEmptyStatus";
import "../../../assets/adminstatus.css";
import Swal from "sweetalert2";

export default class AdminStatus extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get("https://myauthapi1.herokuapp.com/cart")
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatusWaiting = (id, status, editedby) => {
    axios
      .patch(
        `https://myauthapi1.herokuapp.com/cart/${id}`,
        {
          status,
          editedby,
        },
        {
          headers: {
            token: window.localStorage.getItem("admin_token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Change Status To Waiting to Confirm Successfully",
          timer: 1000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Change Status To Delivering Unsuccessfully",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      });
  };

  updateStatusDelivering = (id, status, editedby) => {
    axios
      .patch(
        `https://myauthapi1.herokuapp.com/cart/${id}`,
        {
          status,
          editedby,
        },
        {
          headers: {
            token: window.localStorage.getItem("admin_token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Change Status To Delivering Successfully",
          timer: 1000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Change Status To Delivering Unsuccessfully",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      });
  };

  updateStatusDone = (id, status, editedby) => {
    axios
      .patch(
        `https://myauthapi1.herokuapp.com/cart/${id}`,
        {
          status,
          editedby,
        },
        {
          headers: {
            token: window.localStorage.getItem("admin_token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Change Status To Delivering Successfully",
          timer: 1000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Change Status To Delivering Unsuccessfully",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      });
  };

  render() {
    return (
      <main className="content">
        <div>
          <div className="admin-status-table-headers">
            <div className="admin-status-table-header">Date</div>
            <div className="admin-status-table-header">User</div>
            <div className="admin-status-table-header">Ship To</div>
            <div className="admin-status-table-header">Payment Method</div>
            <div className="admin-status-table-header">Sale Amount</div>
            <div className="admin-status-table-header">Phone</div>
            <div className="admin-status-table-header">Status</div>
            <div className="admin-status-table-header">Staff In Charge</div>
            <div
              className="admin-status-table-header"
              style={{ justifySelf: "center" }}
            >
              Action
            </div>
          </div>
        </div>
        <div className="orders">
          {this.state.products.length > 0 ? (
            this.state.products
              .slice(0)
              .reverse()
              .map((product) => {
                return (
                  <div className="order">
                    <AdminStatusRow
                      updateStatusWaiting={this.updateStatusWaiting}
                      updateStatusDelivering={this.updateStatusDelivering}
                      updateStatusDone={this.updateStatusDone}
                      key={`product_id_${product.id}`}
                      productss={product}
                    />
                  </div>
                );
              })
          ) : (
            <AdminEmptyStatus />
          )}
        </div>
      </main>
    );
  }
}
