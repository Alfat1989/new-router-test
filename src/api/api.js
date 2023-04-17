import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://636fbae6bb9cf402c81e5849.mockapi.io/api/';

//GET
const getDate = async () => {
  try {
    const { data } = await axios.get('todos');
    Notify.success('good');
    console.log(data);
    return data;
  } catch (error) {
    Notify.error('error.message');
    console.log(error);
  }
};

//DELETE
const deleteDate = async id => {
  const { data } = await axios.delete(`todos/${id}`);
  return data;
};

// ADD
const addDate = async obj => {
  const { data } = axios.post('todos', obj);
  Notify.info('Created');
  return data;
};

const allApi = {
  getDate,
  deleteDate,
  addDate,
};

export default allApi;
