import axios from 'axios';

export const getInfoLocal = async (latitude, longitude) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0d7fa5942746824e78f80259ba5512ed&units=metric&lang=pt_br`);

    return res.data;
}