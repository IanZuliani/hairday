import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({ date }){
    try {
        //makes the request
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)

        //Convert to json
        const data = await response.json()

        //filters appointments by the selected day
        const dailySchedules = data.filter((schedule) => dayjs(date)
        .isSame(schedule.when, "day"))

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("It was not possible to search for appointments for the selected day")
    }
}