import React from "react";
import { Empty } from "../Empty";
import ProductRowDisableFemaleTshirt from "./ProductRowDisableFemaleTshirt";
import axios from "axios";
import Swal from "sweetalert2";
export default class MainContentDisableFemaleTshirt extends React.Component {
  state = {
    open: false,
    products: [],
    isEditting: undefined, //index
  };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    axios
      .get("https://myauthapi1.herokuapp.com/disablefemalet-shirt")
      .then((res) => {
        console.log(res);
        this.setState({
          products: res.data,
        });
      });
    this.intervalID = setTimeout(this.getData.bind(this), 30000);
  };

  deleteDisableProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, On sale the product!",
      cancelButtonText: "No, keep it",
    })
      .then((result) => {
        if (result.value) {
          axios.delete(
            `https://myauthapi1.herokuapp.com/disablefemalet-shirt/${_id}`,
            {
              _id,
            },
            {
              headers: {
                token: window.localStorage.getItem("admin_token"),
              },
            }
          );
          Swal.fire(
            "Disable!",
            "Your product has been push On Sale.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your prodct is still disable :)", "error");
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Delete Unsuccessfully",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      });
  };

  addOnSaleProduct = (
    name,
    image,
    price,
    size,
    category,
    sex,
    S,
    M,
    L,
    XL,
    XXL
  ) => {
    axios
      .post(
        "https://myauthapi1.herokuapp.com/product",
        {
          name,
          image,
          price,
          size,
          category,
          sex,
          S,
          M,
          L,
          XL,
          XXL,
        },
        {
          headers: {
            token: window.localStorage.getItem("admin_token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <main className="content">
          <div className="content-table">
            <div className="table-headers">
              <div className="table-header">Id</div>
              <div className="table-header">Name</div>
              <div className="table-header">Price</div>
              <div className="table-header">Image</div>
              <div className="table-header" style={{ justifySelf: "center" }}>
                Action
              </div>
            </div>
            {this.state.products.length > 0 ? (
              this.state.products.map((product) => {
                return (
                  <ProductRowDisableFemaleTshirt
                    deleteDisableProduct={this.deleteDisableProduct}
                    addOnSaleProduct={this.addOnSaleProduct}
                    key={`product_id_${product._id}`}
                    product={product}
                  />
                );
              })
            ) : (
              <Empty />
            )}
          </div>
        </main>
      </>
    );
  }
}
