import s from './Button.module.css';

const Button = ({ pagin }) => {
  return (
    <button className={s.Button} onClick={() => pagin()}>
      {' '}
      Load more
    </button>
  );
};

export default Button;
