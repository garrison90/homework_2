import React, { Component } from "react";
import "./styles/ContactsList.css";
import ContactListItem from "./ContactListItem";

export default class ContactsList extends Component {
  render() {
    return (
      <ul>
        <ContactListItem
          items={this.props.items}
          deleteContact={this.props.deleteContact}
        />
      </ul>
    );
  }
}
