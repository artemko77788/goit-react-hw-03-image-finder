import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ click }) => {
  return (
    <button className={s.Button} type="button" onClick={click}>
      Load more
    </button>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Button;
