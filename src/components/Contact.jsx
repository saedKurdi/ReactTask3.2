import { Component } from "react";

class Contact extends Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    phone: this.props.phone,
    id: this.props.id,
  };

  handleRemoveContact = (e) => [this.props.removeContact(this.state.id)];

  render() {
    return (
      <div className="contact">
        <h2>{this.state.name}</h2>
        <p>ID - {this.state.id}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.phone}</p>
        <button onClick={this.handleRemoveContact}>Remove Contact</button>
      </div>
    );
  }
}

export default Contact;
