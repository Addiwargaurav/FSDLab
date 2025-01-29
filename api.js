 
document.getElementById("fetchWeatherBtn").addEventListener("click", fetchWeather);

async function fetchWeather() {
    const city = document.getElementById("cityInput").value;

    try {
       
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=en`);
        const geoData = await geoResponse.json();

        if (geoData.results.length === 0) {
            throw new Error("City not found");
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;

     
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherResponse.json();

        const cityName = city;
        const tempCelsius = weatherData.current_weather.temperature;
        const weatherCode = weatherData.current_weather.weathercode;

       
        const weatherDescription = getWeatherDescription(weatherCode);

        document.getElementById("weather").innerHTML = `
            <h2>Weather in ${cityName}</h2>
            <p><strong>Temperature:</strong> ${tempCelsius}°C</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            `;
    } catch (error) {
        document.getElementById("weather").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function getWeatherDescription(code) {
    switch (code) {
       case 0:return "clear sky";
        case 1:
        case 2:
        case 3:
            return "Partly cloudy";
        case 4:
            return "Cloudy";
        
        case 5:
            return "Thunderstorm";
        default:
            return "Unknown condition";
    }
}
 
 






