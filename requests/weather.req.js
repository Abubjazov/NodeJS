const reqPromise = require('request-promise')

// module.exports = function() {}
// module.exports = {
//     request: function() {}
// }

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Не указано название города!')
    }

    const key = '73707dfe5dbc3a00e17dc1efedd434d0',
          uri = 'https://api.openweathermap.org/data/2.5/weather',
          options = {
            uri: uri,
            qs: {
                appid: key,
                q: city,
                units: 'metric'
            },
            json: true
          }

    try {
        const data = await reqPromise(options)

        return {
            weather: `${data.name}: ${data.main.temp}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        }
    } 
    
}


//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units={metric}
