import { createUseStyles } from 'react-jss';

import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const useStyles = createUseStyles({
  list: {
    padding: 0,
    margin: 0,
  },
});
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const s = useStyles();
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
