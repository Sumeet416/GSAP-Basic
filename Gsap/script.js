const button = document.querySelector('#search-button');
const input = document.querySelector('#city-name');
const region = document.querySelector('#city-region');
const country = document.querySelector('#country');
const temperature = document.getElementById('city-temp');

async function getData(cityname){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=6300920c5ced4dc89c6160603251106&q=${cityname}&aqi=yes`
    );
    return await promise.json();
}


button.addEventListener('click', async() => {
    const value = input.value;
    const result = await getData(value);

region.innerText = `${result.location.region}`;
country.innerText = `${result.location.country}`;
temperature.innerText = `${result.current.temp_c}°C`;

});
