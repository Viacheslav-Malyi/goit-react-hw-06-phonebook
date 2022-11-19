import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ContactList } from './ContactList/ContactList';
import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import { FormContact } from './FormContact/FormContact';
import { Title } from './Title/Title';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedLocalContacts = JSON.parse(localContacts);

    if (parsedLocalContacts) {
      setContacts(parsedLocalContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name: newContact.name,
      number: newContact.number,
    };
    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    const filerNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filerNormalize)
    );
  };

  const onDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterResult = filterContacts();
  return (
    <Container>
      <Title title={'Phonebook'} />
      <FormContact onSubmit={addContact} />
      <Title title={'Contacts'} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList Contacts={filterResult} onDeleteContact={onDeleteContact} />
    </Container>
  );
};
