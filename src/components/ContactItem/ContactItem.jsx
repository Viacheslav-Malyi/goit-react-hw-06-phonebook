import css from '../../components/phonebook.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contact__item}>
      <span className={css.contact__name}>{contact.name}: </span>
      <a className={css.contact__phone} href={`tel:${contact.number}`}>
        {contact.number}
      </a>
      <button
        className={css.delete__button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
  onDeleteContact: PropTypes.func,
};
