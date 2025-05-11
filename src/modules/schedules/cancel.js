const periods = document.querySelectorAll(".period")

//generate click event for each list (Morning, afternoon, evening)
periods.forEach((period) => {
   //capture the click event on the list
   period.addEventListener("click", (event) => {
    if(event.target.classList.contains("cancel-icon")){
       //get the parent li of the clicked element
       const item = event.target.closest("li")
       const { id } = item.dataset
      
       if(id){
        const isConfirm = confirm("Tem certesa que deseja cancelar o agendamento")

        if(isConfirm){
            console.log("REMOVER")
           }

       }

      

    }
   })
})