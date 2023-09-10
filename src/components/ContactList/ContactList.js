import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <span>{`${contact.name}: ${contact.number}`}</span>
          <button
            className={css.delete}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  deleteContact: PropTypes.func.isRequired,
};