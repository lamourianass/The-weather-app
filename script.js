const cityInput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')
const notFoundSection = document.querySelector('.not-found')
const searchCitySection = document.querySelector('.search-city')
const weatherInfoSection = document.querySelector('.weather-info')
const apiKey = "fcc7518e67cb0ca5968f2ef774337981"

const countryTxt = document.querySelector('.country-txt')
const tempTxt =document.querySelector('.temp-txt')
const conditionTxt =document.querySelector('.condition-txt')
const humidityValueTxt =document.querySelector('.humidity-value-txt')
const windValueTxt =document.querySelector('.wind-value-txt')
const weatherSummaryImg =document.querySelector('.weather-summary-img')
const currentDateTxt = document.querySelector('.current-date-txt')


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
  console.log(weatherData);
  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed }
  } = weatherData

  showDisplaySection(weatherInfoSection)
}

function showDisplaySection(section) {
  [weatherInfoSection, searchCitySection, notFoundSection]
    .forEach(section => section.style.display = 'none')
  section.style.display = 'flex'
}
