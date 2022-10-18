import axios from 'axios';
import { appId, baseApi } from '../constants/api';

export const getInfoLocal = async (latitude, longitude) => {
    const res = await axios.get(`${baseApi}weather?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric&lang=pt_br`);
    return res.data;
}

export const get5Days = async (latitude, longitude) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric&lang=pt_br`);
    return res;
}