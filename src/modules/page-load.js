import { schedulesDay } from "./schedules/load.js"
//Capture the events when the screen finishes loading the elements, then we display the times
document.addEventListener("DOMContentLoaded", function(){
    schedulesDay()
})