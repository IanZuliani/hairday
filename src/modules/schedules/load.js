import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"

//seleciona o imput de data
const selectedDate = document.getElementById("date")

//search the API for appointments to load on the right side of the screen 
//Available times (Future time + unscheduled time)
export async function schedulesDay(){
  //obyten a data do input
  const date = selectedDate.value

  //search for appointments in the API
  const dailySchedules = await scheduleFetchByDay({date})
  console.log(dailySchedules)

  //renders available hours
  hoursLoad({date})
}