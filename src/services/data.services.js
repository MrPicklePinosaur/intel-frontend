
import axios from 'axios';
import { API_URL } from '../config.js';

// simple query on relevant data
export const getGraduateData = (fos, age, gender) => {
    return axios.get(
        API_URL+'/data'+`?fos=${fos}&age=${age}&gender=${gender}`
    )
    .then(res => res.data)
    .catch(err => err);
} 

