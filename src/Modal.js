import React, { Component } from "react";
import "./styles/Modal.css";

const initialState = {
  name: "",
  surname: "",
  phone: "",
  nameError: "",
  surnameError: "",
  phoneError: "",
  disabledButton: false,
};

export default class Modal extends Component {
  state = initialState;

  onClose = (e) => {
    this.props.onClose(e);
    this.setState(initialState);
  };

  handleChange = (e) => {
    if ([e.target.value].length > 0) {
      this.setState({
        nameError: "",
        surnameError: "",
        phoneError: "",
        disabledButton: false,
      });
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let surnameError = "";
    let phoneError = "";

    if (!this.state.name) {
      nameError = "This field is required";
    }

    if (!this.state.surname) {
      surnameError = "This field is required";
    }

    if (!this.state.phone) {
      phoneError = "This field is required";
    }

    if (nameError || surnameError || phoneError) {
      this.setState({
        nameError,
        surnameError,
        phoneError,
        disabledButton: true,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, phone } = this.state;
    const isValid = this.validate();
    if (isValid) {
      const newContact = { name, surname, phone };
      this.props.addNewContact(newContact);
      this.setState(initialState);
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="container">
        <h1>Add Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name..."
            className={`txtb ${this.state.nameError ? "error" : ""}`}
          />

          <input
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
            placeholder="Enter surname..."
            className={`txtb ${this.state.surnameError ? "error" : ""}`}
          />

          <input
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Enter pnone..."
            className={`txtb ${this.state.phoneError ? "error" : ""}`}
          />

          <button className="add-form-btn" disabled={this.state.disabledButton}>
            Add
          </button>

          <button className="cancel-btn" onClick={this.onClose}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
