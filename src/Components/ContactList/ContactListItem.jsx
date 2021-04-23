import { createUseStyles } from 'react-jss';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';

const useStyles = createUseStyles({
  listItem: {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    marginRight: 'auto',
  },
  number: {
    fontWeight: '500',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: '#fff',
    boxShadow: '1px 1px 0px 0px black',
    border: 'none',
    borderRadius: 3,
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '1px 1px 0px 0px orange',
      color: 'orange',
    },
  },
});
const ContactItem = ({ contact }) => {
  const s = useStyles();
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={s.listItem}>
      <p className={s.name}>{contact.name}</p>
      <p className={s.number}>{contact.number}</p>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
