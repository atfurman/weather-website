const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?limit=1&access_token=pk.eyJ1IjoiYXRmdXJtYW4iLCJhIjoiY2s4ajVvOTloMGRoMjNtcWlwbGYzc2xuNSJ9.EAmjqVgnYabXs7vlhexl3w'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to conect to location service', undefined)
        } else if (body.message) {
            callback('Looks like you did not provide input:'+body.message, undefined)
        } else if (body.features.length === 0) {
            callback('Location not found. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode