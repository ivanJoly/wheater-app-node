const axios = require('axios');


const getLatLng = async (location) => {

    let encodedUrl = encodeURI( location )

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    
    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para: ${ location }`)
    }

    let data = response.data.results[0];
    let coors = data.geometry.location;

    return {
        direccion: data.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getLatLng
}