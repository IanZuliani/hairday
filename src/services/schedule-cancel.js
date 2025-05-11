import { apiConfig } from "./api-config.js"

export async function scheduleCancel({id}){
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`,{
            method: "DELETE",
        })

        alert("Appointment cancelled successfully!")
    } catch (error) {
        console.log(error)
        alert("Unable to cancel appointment, please try again later")
    }
}