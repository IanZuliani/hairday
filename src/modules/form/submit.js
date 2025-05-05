import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Today date for input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//load the current date
selectedDate.value = inputToday

//sets the minimum date to be the current one
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //prevents form submission
    event.preventDefault()

    console.log("ENVIADO")
}