import css from '../../components/phonebook.module.css';

import { useState } from 'react';

export const FormContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hanldeChangeName = event => {
    setName(event.currentTarget.value);
  };

  const hanldeChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const hanldeSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <div className={css.form__container}>
      <form onSubmit={hanldeSubmit}>
        <label>
          <p className={css.input__description}>Name</p>
          <input
            className={css.form__input}
            type="text"
            name="name"
            value={name}
            onChange={hanldeChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p className={css.input__description}>Number</p>
          <input
            className={css.form__input}
            type="tel"
            name="number"
            value={number}
            onChange={hanldeChangeNumber}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <div>
          <button className={css.add__button} type="submit">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};
