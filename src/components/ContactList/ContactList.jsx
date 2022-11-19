import PropTypes from 'prop-types';

import css from '../../components/phonebook.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
export const ContactList = ({ Contacts, onDeleteContact }) => {
  console.log('Contact list', Contacts);
  return (
    <ul className={css.contact__list}>
      {Contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  Contact: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
