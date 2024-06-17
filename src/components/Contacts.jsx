import React, { Component } from "react";
import ContactAddForm from "./ContactAddForm";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [],
  };

  addContact = (contact) => {
    contact.id = this.state.contacts.length + 1;
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  removeContactById = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  writeContactsToLocalStorage = () => {
    const { contacts } = this.state;
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.writeContactsToLocalStorage();
    }
    console.log("component updated !");
  }

  componentDidMount() {
    this.readContactsFromLocalStorage();
    console.log("component did mount !");
  }

  componentWillUnmount() {
    console.log("component will unmount !");
  }

  readContactsFromLocalStorage = () => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = contacts ? JSON.parse(contacts) : [];
    this.setState({
      contacts: parsedContacts,
    });
  };

  render() {
    return (
      <>
        <ContactAddForm addContact={this.addContact} />
        {this.state.contacts.length === 0 ? (
          <p>No contacts found</p>
        ) : (
          <ul className="contacts">
            {this.state.contacts.map((contact) => (
              <li key={contact.id}>
                <Contact
                  removeContact={this.removeContactById}
                  id={contact.id}
                  email={contact.email}
                  name={contact.name}
                  phone={contact.phone}
                />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Contacts;
