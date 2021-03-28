import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const useStyles = createUseStyles({
  list: {
    padding: 0,
    margin: 0,
  },
});
const ContactList = ({ contacts, onDelete }) => {
  const s = useStyles();
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
export default ContactList;
