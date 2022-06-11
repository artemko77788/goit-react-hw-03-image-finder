import axios from 'axios';
import PropTypes from 'prop-types';

const getImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '26393294-335f15b3263fd329d68c58b33',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  },
});
const fetchImages = async (serchName, pagination) => {
  try {
    const { data } = await getImages('', {
      params: { q: serchName, page: pagination },
    });

    return data.total !== 0
      ? data.hits
      : Promise.reject(new Error(`${serchName}`));
  } catch (error) {
    console.error(error.message);
  }
};

fetchImages.propType = {
  serchName: PropTypes.string.isRequired,
  pagination: PropTypes.number.isRequired,
};

export default fetchImages;
