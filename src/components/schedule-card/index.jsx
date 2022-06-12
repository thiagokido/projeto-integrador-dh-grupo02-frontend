import './styles.css'
import { useNavigate } from 'react-router-dom'

function ScheduleCards ({ barbershopId, barbershopName, barbershopAddress, barbershopImg, barbershopDistrict, barbershopCity, barbershopState, barbershopZipCode, scheduleDateTime, scheduleStatus }) {

    const navigate = useNavigate()

    function handleNewSchedule (e) {
        e.preventDefault()
        navigate('/barbershop/'+barbershopId)
    }

    return (
        <div id='schedule-card'>
            <div id='barbershop-img'>
                <img src={barbershopImg} alt="" />
            </div>
            <div id='schedule-card-info'>
                <h1>{barbershopName}</h1>
                <div id='schedule-card-address'>
                    <p>Endereço:</p>
                    <p>{barbershopAddress} - {barbershopDistrict}</p>
                    <p>{barbershopCity} - {barbershopState}</p>
                    <p>{barbershopZipCode}</p>
                </div>
                <div id="schedule-card-contacts">
                    <p>Data / Horário: {scheduleDateTime}</p>
                    <p>Status: {scheduleStatus}</p>
                </div>
            </div>
            <input id='schedule-card-status' type="submit" value="Agendar Novamente" onClick={e => handleNewSchedule(e)}/>
        </div>
    )
}

export default ScheduleCards