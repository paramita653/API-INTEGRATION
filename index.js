document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'fcc8de7015bbb202209bbf0261babf4c'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            document.getElementById('weatherResult').innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Condition: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});
