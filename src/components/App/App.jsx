import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import s from './App.module.css';
import Button from 'components/Button';
import FetchImages from '../../service/api';
import Loader from 'components/Loader';

class App extends Component {
  state = {
    imagesArr: [],
    seach: '',
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { seach, page, imagesArr } = this.state;

    if (prevState.seach !== seach || prevState.page !== page) {
      this.setState({ status: 'pending' });
      FetchImages(seach, page)
        .then(data =>
          this.setState({ imagesArr: [...imagesArr, data], status: 'resolved' })
        )
        .catch(error => {
          this.setState({ error: error, status: 'rejected' });
        });
    }
  }

  hendlerFormSubmit = data => {
    this.setState({ seach: data, imagesArr: [], page: 1 });
  };

  handleClickBtn = e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { imagesArr, error, status } = this.state;

    return (
      <>
        {status === 'idle' && (
          <div className={s.app}>
            <Searchbar hendlerForm={this.hendlerFormSubmit} />
            <ToastContainer autoClose={1500} />
          </div>
        )}

        {status === 'pending' && (
          <div className={s.app}>
            <Searchbar hendlerForm={this.hendlerFormSubmit} />
            <ToastContainer autoClose={1500} />
            {imagesArr.length !== 0 && <ImageGallery imagesArr={imagesArr} />}
            <Loader />
          </div>
        )}
        {status === 'rejected' && (
          <div className={s.app}>
            <Searchbar hendlerForm={this.hendlerFormSubmit} />
            <Loader />
            <p className={s.error}>No such images: {error.message}</p>
          </div>
        )}

        {status === 'resolved' && (
          <div className={s.app}>
            <Searchbar hendlerForm={this.hendlerFormSubmit} />
            <ToastContainer autoClose={1500} />
            <ImageGallery imagesArr={imagesArr}>
              <Button click={this.handleClickBtn} />
            </ImageGallery>
          </div>
        )}
      </>
    );
  }
}

export default App;
