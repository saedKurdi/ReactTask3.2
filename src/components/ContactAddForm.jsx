import { Component } from "react";

class ContactAddForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  handlerOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerAddContact = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
    };
    this.props.addContact(newContact);
  };

  render() {
    return (
      <form
        onSubmit={this.handlerAddContact}
        className="form"
        onChange={this.handlerOnChange}
      >
        <input
          type="text"
          value={this.state.name}
          placeholder="Name"
          name="name"
        />
        <input
          type="tel"
          value={this.state.phone}
          placeholder="Phone"
          name="phone"
        />
        <input
          type="email"
          value={this.state.email}
          placeholder="Email"
          name="email"
        />

        <button>Add Contact</button>
      </form>
    );
  }
}

export default ContactAddForm;
