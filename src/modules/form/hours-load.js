import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }){
    const opening = openingHours.map((hour)=>{
        //recuperando apenas a hora
    const [scheduleHour] = hour.split(":")

        console.log(scheduleHour)

        //add the time to the date and check if it is in the past
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        //console.log(scheduleHour, isHourPast)

       return{
        hour,
        available: isHourPast
       }
    })

    console.log(opening)
}