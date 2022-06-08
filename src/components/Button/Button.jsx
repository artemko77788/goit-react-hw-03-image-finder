import s from './Button.module.css';

const Button = ({ click }) => {
  return (
    <button className={s.Button} onClick={click}>
      Load more
    </button>
  );
};

export default Button;
