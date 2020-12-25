import * as ELEMENTS from './public/scripts/elements';
import HTTP from './public/scripts/http';
import { Weather, WEATHER_PROXY_HANDLER } from './public/scripts/weather';

const API_ID = '';
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', () =>{
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCH_INPUT.value.trim();
    if(!CITY_NAME){
        alert('Please enter city name');
        return false;
    }
    
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_ID}`;

    ELEMENTS.ELEMENT_LOADER.style.display = 'inline-block';
    HTTP.get(URL)
        .then(response => {
            let weatherObj = new Weather(CITY_NAME, response.weather[0].description);
            const WEATHER_PROXY = new Proxy(weatherObj, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = response.main.temp;
            ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = WEATHER_PROXY.temperature;
            ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = WEATHER_PROXY.description;
            ELEMENTS.ELEMENT_WEATHER_CITY.textContent = WEATHER_PROXY.city;
            ELEMENTS.ELEMENT_LOADER.style.display = 'none';
            ELEMENTS.ELEMENT_JUMBOTRON.style.display = 'block';
        }, function(){
            ELEMENTS.ELEMENT_LOADER.style.display = 'none';
        });

});