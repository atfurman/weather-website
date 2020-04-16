const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c388c4cf469124eb5c0e5dd399e3038a/' + latitude +','+ longitude + '?'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Error: '+body.error, undefined)
        } else {
            callback(undefined, body.currently.summary+ ' It is currently '+body.currently.temperature+' degrees outside. There is a '+body.currently.precipProbability+'% chance of rain.')
        }
    })
}

module.exports = forecast