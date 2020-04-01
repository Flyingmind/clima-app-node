const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=710ff75c2189d14ea5496d2a425c0b34&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}