import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//GET

const register = createAsyncThunk('', async credential => {
  try {
    const { data } = await axios.post('/users/signup', credential);
    return data;
  } catch (error) {
    return error;
  }
});

// const getDate = async ({ auth, name, password }) => {
//   try {
//     const res = await axios.get('todos', {
//       headers: {
//         Authorization: auth,
//       },
//       auth: {
//         username: name,
//         password: password,
//       },
//     });
//     console.log(res);
//     if (res.status === 200) {
//       return res.data;
//     }
//   } catch (error) {
//     console.log(error);

//     return error(error.message);
//   }
// };

//DELETE

// ADD

// CHECK
const checkOnlineState = boleanConst => {
  if (boleanConst) {
    return true;
  } else {
    Notify.failure(
      'no internet connection please check your internet connection',
      {
        timeout: 5000,
        clickToClose: true,
        backOverlay: true,
        backOverlayColor: '#000000',
        showOnlyTheLastOne: true,
      }
    );
    return false;
  }
};

const allApi = {
  checkOnlineState,
  register,
};

export default allApi;
