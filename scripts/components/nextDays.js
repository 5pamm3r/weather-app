import { nextDaysContainer, fragmentNextDays } from "./nextDaysContainer.js"
export const nextDays = (data) => {
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  document.querySelector('.footerSubtitle__container').style.display = 'none';
  document.querySelector('#nextHoursContainer').style.display = 'none';
  document.querySelector('#backBtn').style.display = 'inline-block';
  document.querySelector('#nextDays').style.display = 'none'

  nextDaysContainer(
    days[new Date(data.forecast.forecastday[1].date_epoch*1000).getDay()],
    data.forecast.forecastday[1].day.condition.icon,
    data.forecast.forecastday[1].day.condition.text,
    Math.floor(data.forecast.forecastday[1].day.maxtemp_c),
    Math.floor(data.forecast.forecastday[1].day.mintemp_c),
  )
  nextDaysContainer(
    days[new Date(data.forecast.forecastday[2].date_epoch*1000).getDay()],
    data.forecast.forecastday[2].day.condition.icon,
    data.forecast.forecastday[2].day.condition.text,
    Math.floor(data.forecast.forecastday[2].day.maxtemp_c),
    Math.floor(data.forecast.forecastday[2].day.mintemp_c),
  )
  document.querySelector('#nextDaysContainer').append(fragmentNextDays)
}