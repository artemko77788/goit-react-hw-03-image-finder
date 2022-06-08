import axios from 'axios';
import PropTypes from 'prop-types';

const BASEURL = 'https://pixabay.com/api/';
const KEY = '26393294-335f15b3263fd329d68c58b33';
const IMAGEPARAMETERS = 'image_type=photo&orientation=horizontal';
const COUNTOFIMAGES = '12';

const FetchImages = (serchName, pagination) => {
  return axios(
    `${BASEURL}?key=${KEY}&q=${serchName}&page=${pagination}&${IMAGEPARAMETERS}&per_page=${COUNTOFIMAGES}`
  ).then(res => {
    if (res.data.total !== 0) {
      return res.data.hits;
    }
    return Promise.reject(new Error(`${serchName}`));
  });
};

FetchImages.propType = {
  serchName: PropTypes.string.isRequired,
  pagination: PropTypes.number.isRequired,
};

export default FetchImages;
