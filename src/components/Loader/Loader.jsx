import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.circle}>
      <Circles height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
