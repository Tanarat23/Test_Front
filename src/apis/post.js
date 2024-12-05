import axios from '../config/axios';

const postApi = {};

postApi.getData = () => axios.get('/posts');
postApi.deleteData = (id) => axios.delete(`/posts/${id}`);
postApi.createData = (body) => axios.post('/posts/create', body);

export default postApi;
