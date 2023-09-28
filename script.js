const apiKey = "c55be1ce68d20d3933257c6c31a74646"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const weatherImg = document.querySelector(`.condition img`)

const weather = async (city) => {

    const result = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (result.status === 404) {
        document.querySelector(`.error`).style.display = 'block'
        document.querySelector(`.wether`).style.display = 'none'
    }
    else {
        let data = await result.json()
        document.querySelector(`.city`).textContent = data.name
        document.querySelector(".temp").textContent = data.main.temp + " °C";
        document.querySelector(".humidity").textContent = data.main.humidity + " %";
        document.querySelector(".wind").textContent = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "img/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "img/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "img/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "img/mist.png";
        }

        document.querySelector(`.error`).style.display = 'none'
        document.querySelector(`.wether`).style.display = 'flex'
    }
}

const textField = document.querySelector(`.input input`)
const searchBtn = document.querySelector(`.input button`)


searchBtn.addEventListener('click', () => {
    weather(textField.value)
})
textField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {

        weather(textField.value)
    }
})