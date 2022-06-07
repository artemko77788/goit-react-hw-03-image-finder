import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const KEY = '26393294-335f15b3263fd329d68c58b33';
const IMAGEPARAMETERS = 'image_type=photo&orientation=horizontal';
const COUNTOFIMAGES = '12';

const fetchImages = (serchName, pagination) => {
  try {
    return axios(
      `${BASEURL}?key=${KEY}&q=${serchName}&page=${pagination}&${IMAGEPARAMETERS}&per_page=${COUNTOFIMAGES}`
    ).then(res => {
      if (res.data.total !== 0) {
        console.log(res);
        return res.data.hits;
      }
      return Promise.reject(new Error(`${serchName}`));
    });
  } catch (error) {
    console.log(error);
  }
};

export default fetchImages;
