import s from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    seachImgs: '',
  };
  handleInputChange = e => {
    this.setState({ seachImgs: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.seachImgs.trim() === '') {
      toast.error('Imput something');

      return;
    }

    this.props.hendlerForm(this.state.seachImgs);
    this.setState({ seachImgs: '' });
  };
  render() {
    return (
      <header className={s.Search}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span>
              <FaSearch />
            </span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.seachImgs}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
