
const clima = require('./clima/clima');
const { getClima } = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// argv.direccion 
// getLugarLatLng( argv.direccion )
//     .then( console.log )
// getClima(28.97, -111.82)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async( direccion ) => {

    try {
        
        const lugar = await getLugarLatLng( direccion )
        const lat = lugar.lat;
        const lng = lugar.lng;
        const name = lugar.direccion;

        const clima = await getClima( lat, lng );

        return `El clima de ${ name } es de ${ clima }°C`

    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`
    }

    // Salida
    // El clima de XXXXXX es de XX
    // No se pudo determinar el clima de XXXXXX

}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log )