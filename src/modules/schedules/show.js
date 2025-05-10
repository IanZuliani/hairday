import dayjs from "dayjs";

//select the sessions, morning, afternoon and evening
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")


export function schedulesShow({ dailySchedules }){
    try {
        //clear the lists
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //render schedules by period
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")
            
            //add the schedule id
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            //creates the icon to cancel the appointment
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancel")

            //add time, name and icon to item
            item.append(time, name, cancelIcon)

            //get only the time
            const hour = dayjs(schedule.when).hour()

            //render the schedule on termination conditionally (morning, afternoon, evening)
            if(hour <= 12){
                periodMorning.appendChild(item)
            }else if(hour > 12 && hour <= 18){
                periodAfternoon.appendChild(item)
            }else{
                periodNight.appendChild(item)
            }
        });

    } catch (error) {
        console.log(error)
        alert("Unable to display appointments")
    }
}