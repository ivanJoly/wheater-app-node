const location = require('./location/location');
const wheather = require('./wheather/wheater');

const {argv} = require('yargs'). options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
});

// location.getLatLng( argv.direccion )
//     .then( resp => {
//         console.log(resp);
//     })
//     .catch(e => {
//         console.log('error', e);
//     })

// wheather.getWheater(35, 139)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log('error', e);
//     })

let getInfo = async (direccion) => {

    try {

        let coors = await location.getLatLng( direccion );
        let temp = await wheather.getWheater( coors.lat, coors.lng)
    
        return `El clima en ${coors.direccion} es de ${temp}`
        
    } catch (error) {
        
        return `No se pudo determinar el clima en ${ direccion }`

    }


}

getInfo(argv.direccion)
    .then( mnj => console.log(mnj))
    .catch(e => console.log(e));