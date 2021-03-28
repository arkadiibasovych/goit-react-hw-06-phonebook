import { useState, useEffect } from 'react';
import PhonebookForm from './Components/PhonebookForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const json = localStorage.getItem('contacts');
    const savedContacts = JSON.parse(json);
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(contacts);
    localStorage.setItem('contacts', json);
  });

  const handleSubmit = newContact => {
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleVisibleFilter = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
      );

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  const handleUniq = name => {
    const filterContact = !!contacts.find(contact => contact.name === name);
    filterContact && alert(`Contact is already in the Phonebook`);
    return !filterContact;
  };

  return (
    <>
      <h2>Phonebook</h2>
      <PhonebookForm onSubmit={handleSubmit} onCheckUniq={handleUniq} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={handleVisibleFilter} onDelete={handleDelete} />
    </>
  );
};

export default App;
