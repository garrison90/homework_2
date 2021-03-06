import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./styles/ContactListItem.css";

export default class ContactListItem extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
