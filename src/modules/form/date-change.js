
import {schedulesDay} from "../schedules/load"
//selecionar o input de data
const selectedDate = document.getElementById("date")

//recaregar a lista de horario quando o input de date mudar
selectedDate.onchange = () => schedulesDay()