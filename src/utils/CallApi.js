import axios from 'axios';
import * as Config from '../constants/Config';

const callApi = (endpoint, method = "GET", body) => {
    return axios({
        method,
        url: `${Config.ROOT_API}/${endpoint}`,
        data: body
    }).catch(err => console.log(err));
};

export default callApi;