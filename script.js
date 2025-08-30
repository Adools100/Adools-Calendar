const dayOfTheWeek = document.querySelector('.day-of-week')
const dayOfTheMonth = document.querySelector('.day-of-month')
const monthOfTheYear = document.querySelector('.month-of-year')
const yearOfTheYear = document.querySelector('.year-of-year')

const months = ['January', 'February', 'March', 'April', 'May', "June", 'July', 'August', 'September', "November", 'December']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function changedate(){
    const date = new Date(),
          dayOfWeek = days[date.getDay()],
          dayOfMonth = date.getDate(),
          monthOfYear = months[date.getMonth()],
          yearOfYear = date.getFullYear()

    if(dayOfMonth.textContent < 10){
    dayOfTheMonth.textContent = `0${dayOfMonth}`
    }else{
    dayOfTheMonth.textContent = `${dayOfMonth}`
    }

    dayOfTheWeek.textContent = dayOfWeek
    monthOfTheYear.textContent = monthOfYear
    yearOfTheYear.textContent = yearOfYear
    
}
changedate() 