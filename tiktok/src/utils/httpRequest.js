import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, object = {}) => {
    const response = await httpRequest.get(path, object);

    return response.data;
};

export default httpRequest;
