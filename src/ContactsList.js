import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./styles/ContactsList.css";

export default class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            <span className="name">{item.name}</span>
            <span className="surname">{item.surname}</span>
            <span className="phone">{item.phone}</span>
            <span>
              <FontAwesomeIcon
                className="icon"
                icon={faTrash}
                onClick={() => this.props.deleteContact(item.id)}
              />
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
