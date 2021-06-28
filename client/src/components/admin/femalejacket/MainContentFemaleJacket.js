import React from "react";
import ContentHeader from "../ContentHeader";
import { Empty } from "../Empty";
import Model from "../Model";
import ProductRowFemaleJacket from "./ProductRowFemaleJacket";
import axios from "axios";
import Swal from "sweetalert2";
import "../../../assets/MainContent.css";
export default class MainContentFemaleJacket extends React.Component {
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
    axios.get("http://localhost:8080/product").then((res) => {
      console.log(res);
      this.setState({
        products: res.data,
      });
    });
    this.intervalID = setTimeout(this.getData.bind(this), 30000);
  };

  addProduct = (name, image, price, size, sex, category, S, M, L, XL, XXL) => {
    axios
      .post(
        "http://localhost:8080/product",
        {
          name,
          image,
          price,
          size,
          sex,
          category,
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
        Swal.fire({
          title: "Create Successfully",
          timer: 1000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Create Unsuccessfully",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      });
  };

  updateProduct = (
    _id,
    name,
    image,
    price,
    sex,
    category,
    S,
    M,
    L,
    XL,
    XXL
  ) => {
    axios
      .patch(
        `http://localhost:8080/product/${_id}`,
        {
          name,
          image,
          price,
          sex,
          category,
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
        this.setState({
          name: +name,
          price: +price,
          image: +image,
        });
        Swal.fire({
          title: "Edit Successfully",
          timer: 1000,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Edit Unsuccessfully",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      });
  };

  deleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, disable it!",
      cancelButtonText: "No, keep it",
    })
      .then((result) => {
        if (result.value) {
          axios.delete(
            `http://localhost:8080/product/${_id}`,
            {
              _id,
            },
            {
              headers: {
                token: window.localStorage.getItem("admin_token"),
              },
            }
          );
          Swal.fire("Disable!", "Your product has been disabled.", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your prodct is safe :)", "error");
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

  addDisableProduct = (
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
        "http://localhost:8080/disablefemalejacket",
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

  updateIsEditting = (_id) => {
    let productss = this.state.products.filter(function (category) {
      return category.category == "jacket" && category.sex == 1;
    });
    const product_index = productss.findIndex((product) => {
      return product._id === _id;
    });
    this.setState({
      isEditting: product_index,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  clearIsEditing = () => {
    this.setState({
      isEditting: undefined,
    });
  };

  render() {
    let productss = this.state.products.filter(function (category) {
      return category.category == "jacket" && category.sex == 1;
    });
    return (
      <>
        <main className="content">
          <ContentHeader
            toggleModal={this.toggleModal}
            addProduct={this.addProduct}
          />
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
            {productss.length > 0 ? (
              productss.map((product) => {
                return (
                  <ProductRowFemaleJacket
                    updateIsEditting={this.updateIsEditting}
                    deleteProduct={this.deleteProduct}
                    addDisableProduct={this.addDisableProduct}
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
        {this.state.open ? (
          <Model
            updateProduct={this.updateProduct}
            clearIsEditing={this.clearIsEditing}
            editingProduct={this.state.products[this.state.isEditting]}
            addProduct={this.addProduct}
            toggleModal={this.toggleModal}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
