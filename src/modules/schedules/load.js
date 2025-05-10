
import { hoursLoad } from "../form/hours-load.js"

//seleciona o imput de data
const selectedDate = document.getElementById("date")

//search the API for appointments to load on the right side of the screen 
//Available times (Future time + unscheduled time)
export function schedulesDay(){
  //obyten a data do input
  const date = selectedDate.value


  //renders available hours

  hoursLoad({date})
}