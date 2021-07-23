import React from "react";
import { Empty } from "../Empty";
import ModalOpinionControl from "./ModalOpinionControl";
import DataRowOpinionControl from "./DataRowOpinionControl";
import axios from "axios";
import Swal from "sweetalert2";
import ErrorNotice from "../../misc/ErrorNotice";

export default class MainContentOpinionControl extends React.Component {
  state = {
    open: false,
    opinions: [],
    isEditting: undefined, //index
    error: undefined,
  };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    axios.get("http://localhost:8080/opinion").then((res) => {
      console.log(res);
      this.setState({
        opinions: res.data,
      });
    });
    this.intervalID = setTimeout(this.getData.bind(this), 30000);
  };

  updateIsEditting = (id) => {
    const opinion_index = this.state.opinions.findIndex((opinion) => {
      return opinion.id === id;
    });
    this.setState({
      isEditting: opinion_index,
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

  handleError = () => {
    this.setState({
      error: undefined,
    });
  };

  render() {
    return (
      <>
        <main className="content">
          <div className="content-header color">
                <h3>Opinions</h3>
            </div>
          {this.state.error && (
            <ErrorNotice
              message={this.state.error}
              clearError={() => this.handleError(undefined)}
            />
          )}
          <div className="content-table">
            <div className="table-headers">
              <div className="table-header">Customer Name</div>
              <div className="table-header">Email</div>
              <div className="table-header">Address</div>
              <div className="table-header">Opinions</div>
              <div className="table-header" style={{ justifySelf: "center" }}>
                Action
              </div>
            </div>
            {this.state.opinions.length > 0 ? (
              this.state.opinions.map((opinion) => {
                return (
                  <DataRowOpinionControl
                    updateIsEditting={this.updateIsEditting}
                    key={`opinion_id_${opinion.id}`}
                    opinion={opinion}
                  />
                );
              })
            ) : (
              <Empty />
            )}
          </div>
        </main>
        {this.state.open ? (
          <ModalOpinionControl
            clearIsEditing={this.clearIsEditing}
            editingOpinion={this.state.opinions[this.state.isEditting]}
            toggleModal={this.toggleModal}
            error={this.state.error}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
