const request = require('request')

const forecast = (lat, lng, callback) => {

    const url = 'https://api.darksky.net/forecast/ca8742a2c3a947c73301da318ed5fb97/' + lat +',' + lng
    request({url, json: true}, (error, {body})=> {
    if(error)
    {
        callback('Unable to connect to weather service!', undefined)
    }
    else if(body.error)
    {
        callback('Unable to find location', undefined)
    }
    else
    {
        callback(undefined, 'The temperature high today is ' + body.daily.data[0].temperatureHigh + ' degrees. ' +
            'The temperature low today is ' + body.daily.data[0].temperatureLow + ' degrees. '
            +   body.daily.data[0].summary +
            ' It is currently ' + body.currently.temperature + ' ' +
            'degrees out.' + ' There is a ' + body.currently.precipProbability + '% chance of rain.')
    }

})

}
module.exports = forecast