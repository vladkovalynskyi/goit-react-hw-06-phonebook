import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, addContact } = this.props;

    if (!contacts.find(contact => contact.name === name.trim())) {
      const newContact = {
        name: name.trim(),
        number: number.trim(),
        id: nanoid(),
      };
      this.setState({
        name: '',
        number: '',
      });
      addContact(newContact);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.createContact}>
        <label className={css.label} htmlFor="name">
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={css.label} htmlFor="number">
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addContact: PropTypes.func.isRequired,
};