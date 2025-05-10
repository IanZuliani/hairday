import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
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
        
        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //inserir a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //gerar um ID
        const id = new Date().getTime()

        console.log({
            id,
            name,
            when,
        })
    } catch (error) {
        alert("Nao foi possivel realizar o agendamento")
        console.log(error)
    }

}