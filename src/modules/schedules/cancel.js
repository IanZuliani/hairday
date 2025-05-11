import {schedulesDay} from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll(".period")

//generate click event for each list (Morning, afternoon, evening)
periods.forEach((period) => {
   //capture the click event on the list
   period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){
       //get the parent li of the clicked element
       const item = event.target.closest("li")

       //get the schedule id to remove
       const { id } = item.dataset
      
       if(id){
        const isConfirm = confirm("Tem certesa que deseja cancelar o agendamento")

        if(isConfirm){
            await scheduleCancel({id})
            schedulesDay()
           }

       }

      

    }
   })
})