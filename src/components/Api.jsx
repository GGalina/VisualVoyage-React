import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34272831-3ed6bcfb2b9ae97f1edcdbcde';

export const getSearchedImgApi = (keyword, page = 1) => {
    return axios
        .get(`${BASE_URL}?q=${keyword}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then((response) => response.data);
};