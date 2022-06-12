import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const ImageGallery = ({ imagesArr, togl, click }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {imagesArr.map(element => {
          return element.map(hits => {
            return <ImageGalleryItem item={hits} key={hits.id} togl={togl} />;
          });
        })}
      </ul>
      <Button click={e => click(e)} />
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
