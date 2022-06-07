import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item }) => {
  const { webformatURL, tags } = item;
  return (
    <li className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemimage} />
    </li>
  );
};

export default ImageGalleryItem;
