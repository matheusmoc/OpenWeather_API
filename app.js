const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");
});


app.post('/', (req, res) => {
    // console.log(req.body.cityName); 

    //partial code url
    const query = req.body.cityName; //city input
    const apiKey = '34e18e8e75ec71a680bb3d3b343c10e3'; //api token
    const unit = 'metric' //celsius 
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + unit;


    https.get(url, (response) => {
        console.log(response.statusCode); //return http status code in api 

        response.on("data", function (data) {
            const weatherData = JSON.parse(data); //transform json in javascript
            //console.log(weatherData);            // the opposite is JSON.stringify() transform object in string


            const temp = weatherData.main.temp; //main is a string and temp is a key on string
            //console.log(temp);
            const weatherDescription = weatherData.weather[0].description; //array
            //console.log(weatherDescription);
            const icon = weatherData.weather[0].icon;
            const imageUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

            //return
            res.write("<p>The weather is currently " + weatherDescription + "<p>");
            res.write("<h2>The temperature"+ query +" is: " + temp + " degrees Celsius<h2>");
            res.write("<img src=" + imageUrl + ">");
            res.send(); //only one send

        })

    });
    //res.send('hello');


})

app.listen(3000, () => {
    console.log('server up');
});