const axios = require('axios');

let getWheater = async (lat, lng) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0874dae74377ebdc0a092bd682e9b643`)

    if(response.code === '400'){
        throw new Error('Huvo un error al enviar los datos')
    }

    let temp = response.data.main.temp

    return temp
    
}

module.exports = {
    getWheater
}