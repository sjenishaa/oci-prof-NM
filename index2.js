/* script.js */
async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].description}</p>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon" />
    `;
  } catch (error) {
    document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
  }
}
