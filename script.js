const cityInput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')
const notFoundSection = document.querySelector('.not-found')
const apiKey = "fcc7518e67cb0ca5968f2ef774337981"

searchBtn.addEventListener('click', () => {
  if (cityInput.value.trim() != '') {
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
  }
})

cityInput.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' &&
    cityInput.value.trim() != ''
  ) {
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
  }

})


async function getFetchData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`
  const response = await fetch(apiUrl)
  return response.json()
}

async function updateWeatherInfo(city) {
  const weatherData = await getFetchData('weather', city)
  if (weatherData.cod != 200) {
    showDisplaySection(notFoundSection)
    return
  }
}

function showDisplaySection(section) {

}
