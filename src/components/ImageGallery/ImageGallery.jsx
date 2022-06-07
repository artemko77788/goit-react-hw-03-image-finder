import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

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

export default ImageGallery;
