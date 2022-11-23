import css from '../../components/phonebook.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact }) => {
  console.log(contact);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={css.contact__item}>
      <span className={css.contact__name}>{contact.name}: </span>
      <a className={css.contact__phone} href={`tel:${contact.number}`}>
        {contact.number}
      </a>
      <button
        className={css.delete__button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};
