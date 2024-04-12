const express = require('express');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Paris`);
        res.render('index', { weather: response.data });
    } catch (error) {
        console.error(error);
        res.send("Error retrieving weather data");
    }
});

app.listen(3000, () => console.log('App listening on port 3000!'));
