import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';

import { Component } from 'react';
import s from './App.module.css';

class App extends Component {
  state = {
    seachArr: [],
  };
  hendlerFormSubmot = data => {
    console.log(data);
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar hendlerForm={this.hendlerFormSubmot} />
        <ImageGallery />

        {/* 
      
    
      <ImageGalleryItem />
      <Loader />
      <Button />
      <Modal /> */}
      </div>
    );
  }
}

export default App;
