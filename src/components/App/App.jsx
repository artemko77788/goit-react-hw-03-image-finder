import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import s from './App.module.css';
import Button from 'components/Button';
import fetchImages from '../../service/Api';

class App extends Component {
  state = {
    imagesArr: [],
    seach: '',
    page: 1,

    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { seach, page, imagesArr } = this.state;

    if (prevState.seach !== seach || prevState.page !== page) {
      fetchImages(seach, page)
        .then(data => this.setState({ imagesArr: [...imagesArr, data] }))
        .catch(error => {
          this.setState({ error: error });
        });
    }
  }

  hendlerFormSubmit = data => {
    this.setState({ seach: data, imagesArr: [], page: 1 });
  };

  paginationFromBtn = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { imagesArr, error } = this.state;
    return (
      <div className={s.App}>
        <ToastContainer autoClose={1500} />
        <Searchbar hendlerForm={this.hendlerFormSubmit} />
        {error && <p>No sach seach: {error.message}</p>}
        <ImageGallery imagesArr={imagesArr}>
          <Button pagin={this.paginationFromBtn} />
        </ImageGallery>
      </div>

      /* 
      
    
   
      <Loader />
     
      <Modal /> */
    );
  }
}

export default App;
