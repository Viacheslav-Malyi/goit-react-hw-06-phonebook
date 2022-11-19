import css from '../../components/phonebook.module.css';
import PropTypes from 'prop-types';
export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter__container}>
      <p className={css.input__description}>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
