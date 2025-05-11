import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new"
import { schedulesDay } from "../schedules/load"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Today date for input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//load the current date
selectedDate.value = inputToday

//sets the minimum date to be the current one
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    //prevents form submission
    event.preventDefault()

    try {

        //retrieving client name
        const name = clientName.value.trim()

        if(!name){
            return alert("Insert Person Name")
        }

        //retrieves the selected schedule
        const hourSelected = document.querySelector(".hour-selected")
        
        if(!hourSelected){
            return alert("select the appointment time")
        }
        
        //Recover only the time
        const [hour] = hourSelected.innerText.split(":")

        //insert time into date
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //generate ID
        const id = new Date().getTime()

        //await to wait for the function to finish, but we have to make this function asynchronous        
        await scheduleNew({
            id,
            name,
            when,
        })

        //reload schedules when a new one is created
        await schedulesDay()
        //clear customer name input after creating an appointment
        clientName.value = ""
    } catch (error) {
        alert("It was not possible to schedule the appointment")
        console.log(error)
    }

}