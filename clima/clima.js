const axios = require('axios');


const getClima = async( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=963da996872d645a626d267f70d6f1a4&units=metric`)


    return resp.data.main.temp; 
}


module.exports = {
    getClima,
}


