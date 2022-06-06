import { Component } from 'react';
import axios from 'axios';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const URL = 'https://pixabay.com/api/';
const KEY = '26393294-335f15b3263fd329d68c58b33';
class ImageGallery extends Component {
  state = {
    imagesArr: [],
  };

  componentDidMount() {
    axios(
      `${URL}?key=${KEY}&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => {
      // console.log(response.data.hits);

      this.setState({ imagesArr: response.data.hits });
    });
  }

  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.state.imagesArr.length > 0 &&
          this.state.imagesArr.map(element => {
            return (
              <li key={element.id} className={s.ImageGalleryItem}>
                <ImageGalleryItem item={element} />
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ImageGallery;
