import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import {hoursClick} from "./hours-click.js"

//Get the ul hours so we can add the li
const hours = document.getElementById("hours") 

export function hoursLoad({ date, dailySchedules }){
    //clear the schedule list
    hours.innerHTML = ""

    //Get the list of busy times
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))
    //console.log(unavailableHours)

    const opening = openingHours.map((hour)=>{
        //retrieving only the time removes the : and puts the first position in the scheduleHour
    const [scheduleHour] = hour.split(":")

        //console.log(scheduleHour)

        //add the time to the date and check if it is in the past
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        //console.log(scheduleHour, isHourPast)

        //will only consider a time available if the time is not scheduled or if it is not in the past
        const available = !unavailableHours.includes(hour) && !isHourPast

       return{
        hour,
        available
       }
    })




    //rendering the schedules
    opening.forEach(({hour, available}) => {
        //creates the LI element
        const li = document.createElement("li")
        //add the hour class
        li.classList.add("hour")
        //if the schedule is avaliable add the hour-available class if not add the hour-unavailable class
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        //add time in LI
        li.textContent = hour

        //checks if there is a header
        if(hour === "9:00"){
            hourHeaderAdd("Morning")
        }else if(hour === "13:00"){
            hourHeaderAdd("Afternoon")
        }else if(hour === "18:00"){
            hourHeaderAdd("Night")
        }

        //add LI in ul hours
        hours.append(li)
    })

    //adiciona evento de clique nos horarios disponiveis
    hoursClick()
}

//Create the hour Headers 
function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}