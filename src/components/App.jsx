// App.js
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleAddContact = newContact => {
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const searchContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return `${contact.name}${contact.number}`
        .toLowerCase()
        .includes(normalizedFilter);
    });
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className="app_container">
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={searchContacts()} deleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;