const apiKey = "828b0e718bd0ea07d7f49fece2035c37"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Toronto";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data)
}

checkWeather()