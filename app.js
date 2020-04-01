const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(-34.610001, -58.369999)
//     .then(console.log)


const getInfo = async(dir) => {



    try {
        const coord = await lugar.getLugarLatLng(dir);

        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de ${dir} es de ${temp}`

    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)