import { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contacts-actions';

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',

    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 25,
    width: '250px',
    border: '1px solid black ',
    borderRadius: 4,
    boxShadow: '1px 1px 0px 0px black',
  },
  label: {
    display: 'flex',
    marginBottom: 10,
    justifyContent: 'space-between',
    '&:hover': {
      color: 'orange',
    },
  },
  button: {
    backgroundColor: '#fff',
    border: '1px solid black ',
    boxShadow: '2px 2px 0px 0px black',
    borderRadius: 3,
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid orange ',
      boxShadow: '2px 2px 0px 0px orange',
      color: 'orange',
    },
  },
});

const PhonebookForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    const isValidated = validateForm();
    if (!isValidated) return;
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleUniq = ({ name }) => {
    const filterContact = !!contacts.find(contact => contact.name === name);
    filterContact && alert(`Contact is already in the Phonebook`);
    return !filterContact;
  };
  const validateForm = () => {
    if (!name || !number) {
      alert('Please еnter data!');
      setName('');
      setNumber('');
      return false;
    }

    return handleUniq(name);
  };

  const s = useStyles();

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default PhonebookForm;
