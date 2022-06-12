import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import Modal from 'components/Modal';
import s from './App.module.css';
import Button from 'components/Button';
import FetchImages from '../../service/api';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    imagesArr: [],
    seach: '',
    page: 1,
    error: null,
    showModal: false,
    modalData: [],
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
  togleModal = data => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));

    if (data !== undefined) {
      this.setState({ modalData: data });
    }
  };

  hendlerFormSubmit = data => {
    this.setState({ seach: data, imagesArr: [], page: 1 });
  };

  handleClickBtn = e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { imagesArr, error, status, modalData, showModal } = this.state;

    return (
      <>
        {showModal && (
          <Modal onClose={this.togleModal}>
            <img src={modalData[0]} alt={modalData[1]} />
          </Modal>
        )}

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
            <ImageGallery
              imagesArr={imagesArr}
              togl={this.togleModal}
              click={this.handleClickBtn}
            />
          </div>
        )}
      </>
    );
  }
}

Modal.propType = {
  modalData: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;
