import Modal from 'components/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props.item;

    return (
      <>
        <li className={s.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={tags}
            className={s.ImageGalleryItemimage}
            onClick={this.togleModal}
          />
        </li>

        {showModal && (
          <Modal onClose={this.togleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
