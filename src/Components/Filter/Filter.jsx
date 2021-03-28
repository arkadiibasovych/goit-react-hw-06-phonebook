import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
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
const Filter = ({ onChange, value }) => {
  const s = useStyles();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
