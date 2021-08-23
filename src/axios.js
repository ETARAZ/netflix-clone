import axios from 'axios';

const myaxios = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});


export default myaxios;