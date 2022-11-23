import css from '../../components/phonebook.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getStatusFilter } from 'redux/filterSlice';

const getVisibleContacts = (contacts, filter) => {
  if (filter.status === '') {
    return contacts.userContacts;
  }
  if (filter.status !== '') {
    return contacts.userContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.status.toLowerCase())
    );
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getStatusFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
