export function hoursClick(){

    /*
     Get our UL with all the schedules, we will get all the available schedules
     that have the '.hour-available' class
    */
    const hours = document.querySelectorAll(".hour-available");


    /**
     * We take the list of available hours and go through it
     */
    hours.forEach(( avaliable )=>{
        // we added a click event to each li
        avaliable.addEventListener("click", (selected) => {
            //Removing the hpur-selected class from all unselected li
            //to always have one with just that class
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })
            //adds the class to the clicked li
            selected.target.classList.add("hour-selected")
        })
    })
}