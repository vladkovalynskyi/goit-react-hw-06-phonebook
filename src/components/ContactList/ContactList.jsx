// ContactList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { ContactCard } from '../ContactCard/ContactCard';
import css from './ContactList.module.css'

export default function ContactsList() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactCard key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}