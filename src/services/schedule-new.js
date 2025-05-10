import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }){

    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when})
        })

        alert("Scheduling completed successfully")
    } catch (error) {
        console.log(error)
        alert("Unable to schedule, please try again later")
    }

}