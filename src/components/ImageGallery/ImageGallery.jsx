import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ imagesArr, children }) => {
  return (
    <>
      {' '}
      <ul className={s.ImageGallery}>
        {imagesArr.map(element => {
          return element.map(hits => {
            return <ImageGalleryItem item={hits} key={hits.id} />;
          });
        })}
      </ul>
      {children}
    </>
  );
};
ImageGallery.propTypes = {
  children: PropTypes.element,
  hits: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGallery;
