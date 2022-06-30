// time
let hoursHTML = document.getElementById('hour')
let minutesHTML = document.getElementById('minutes')

setInterval(() => {
    updateTime()
}, 100)

function updateTime() {
    let today = new Date()

    let hours = today.getHours()  
    let minutes = today.getMinutes()

    hoursHTML.innerHTML = hours  
    minutesHTML.innerHTML = minutes  
}

updateTime()