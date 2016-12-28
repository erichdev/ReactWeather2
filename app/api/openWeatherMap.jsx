var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?uk&appid=25496b516f6b713fc9c841854ba19cfd&units=imperial';


module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}
