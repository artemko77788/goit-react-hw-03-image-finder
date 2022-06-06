import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item }) => {
  const { webformatURL, tags } = item;
  return (
    <img src={webformatURL} alt={tags} className={s.ImageGalleryItemimage} />
  );
};

export default ImageGalleryItem;
