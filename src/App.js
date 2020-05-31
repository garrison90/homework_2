import React, { Component } from "react";
import Modal from "./Modal";
import ContactsList from "./ContactsList";
import "./styles/App.css";

export default class App extends Component {
  state = {
    items: [
      {
        name: "Igor",
        surname: "Ivanov",
        phone: "0938472017",
        id: 1,
      },
      {
        name: "Andrey",
        surname: "Petrov",
        phone: "0963445511",
        id: 2,
      },
      {
        name: "Ivan",
        surname: "Sidorov",
        phone: "0968470215",
        id: 3,
      },
    ],
    show: false,
  };

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  addNewContact = (newContact) => {
    let contact = newContact;
    contact.id = Date.now();
    this.setState({
      items: [...this.state.items, contact],
      show: false,
    });
  };

  deleteContact = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <ContactsList
          items={this.state.items}
          deleteContact={this.deleteContact}
        />
        <button className="add-btn" onClick={() => this.showModal()}>
          Add New Contact
        </button>
        <Modal
          show={this.state.show}
          onClose={this.showModal}
          addNewContact={this.addNewContact}
        />
      </div>
    );
  }
}
