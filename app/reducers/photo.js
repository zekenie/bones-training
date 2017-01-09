import axios from 'axios';
const initialState = [];
function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_PHOTO:
      return [...state, action.photo];
      break;
    default:
      return state;
  }
}

const ADD_PHOTO = 'ADD_PHOTO';
export const addPhoto = photo => ({
  type: ADD_PHOTO,
  photo: photo
});

export const postPhoto = url =>
  dispatch =>
    axios.post('/api/photos', { url })
      .then(res => dispatch(addPhoto(res.data)))

export const fetchPhotos = () =>
  dispatch =>
    axios.get('/api/photos')
      .then(res => res.data)
      .then(photos => {
        photos
          .forEach(photo => {
            dispatch(addPhoto(photo))
          })
      })

export default reducer;




