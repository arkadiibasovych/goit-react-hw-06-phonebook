import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import shortid from 'shortid';

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

const PhonebookForm = ({ onSubmit, onCheckUniq }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const id = shortid.generate();
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id,
      name,
      number,
    };

    const isValidated = validateForm();
    if (!isValidated) return;
    onSubmit(newContact);

    setName('');
    setNumber('');
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Please еnter data!');
      setName('');
      setNumber('');
      return false;
    }
    return onCheckUniq(name);
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

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheckUniq: PropTypes.func.isRequired,
};
export default PhonebookForm;
