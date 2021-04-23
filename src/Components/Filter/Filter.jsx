// import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const useStyles = createUseStyles({
  label: {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      color: 'orange',
    },
  },
  input: {
    width: '100%',
    marginTop: 10,
  },
});
const Filter = () => {
  const s = useStyles();
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };

export default Filter;
