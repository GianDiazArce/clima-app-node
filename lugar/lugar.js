const axios = require('axios');

const getLugarLatLng = async( dir ) => {

    const encoderUrl = encodeURI( dir )

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encoderUrl}`,
        headers: {'x-rapidapi-key': 'b410a68cd6mshd17a847f3085e63p1d4bbdjsn9c9d43adab40'},
    });

    const resp = await instance.get();
    
    if (resp.cod === 404){
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng,
}










