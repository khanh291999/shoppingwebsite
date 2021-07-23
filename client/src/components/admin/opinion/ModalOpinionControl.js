import React, { Component } from "react";
// import ErrorNotice from '../../misc/ErrorNotice'
import "../../../assets/modal.css";

export default class ModalOpinionControl extends Component {
  state = {
    email: "user@gmail.com",
    username: "user",
    address: "1 vo van ngan",
    opinion: "0939911113",
    error: undefined,
  };
  handleClose = () => {
    this.props.toggleModal();
  };

  componentDidMount() {
    if (this.props.editingOpinion) {
      const { id, email, username, address, opinion } =
        this.props.editingOpinion;
      this.setState({
        id,
        email,
        username,
        address,
        opinion,
      });
    } else {
    }
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.props.clearIsEditing();
  }

  render() {
    const {
      id,
      email,
      username,
      address,
      opinion,
    } = this.state;
    return (
      <div className="modal">
        <div className="content p-3">
          <button
            type="button"
            onClick={this.handleClose}
            className="close btn btn-outline-primary"
          >
            Close
          </button>
          <h5> Opinion</h5>
          {/* {this.state.error && (
                        <ErrorNotice message={this.props.error} clearError={() => this.handleError(undefined)} />
                     )} */}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Customer Name</label>
              <input
                type="text"
                disabled
                name="username"
                className="form-control"
                placeholder="User Display Name"
                value={username}
              />
            </div>
            <div className="form-group">
            <label>Customer Email</label>
            <input
                type="text"
                disabled
                name="email"
                className="form-control"
                placeholder="User Email"
                value={email}
            />
            </div>
            <div className="form-group">
              <label>Customer Address</label>
              <input
                type="text"
                disabled
                name="address"
                className="form-control"
                placeholder="User address"
                value={address}
              />
            </div>
            <div className="form-group">
              <label>Customer's Opinion</label>
              <input
                type="text"
                disabled
                name="opinion"
                className="form-control"
                placeholder="Customer opinion"
                value={opinion}
              />
            </div>
            {/* <button type="submit" class="btnadmin btn-outline-primary-admin">
              {this.props.editingOpinion ? "UPDATE" : "ADD"}
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}
