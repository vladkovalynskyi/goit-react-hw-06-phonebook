// selectors.js
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filterValue = getFilter(state);

  const normalizedFilter = filterValue.trim().toLowerCase();

  return contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
};