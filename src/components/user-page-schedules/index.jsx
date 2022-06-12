import './styles.css'
import ScheduleCards from '../../components/schedule-card'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useEffect, useState } from 'react'
import moment from 'moment'

function UserPageSchedules () {

    const { userInfo, setUserInfo } = useContext(AuthContext)
    const [ scheduleList, setScheduleList] = useState([])

    useEffect( async () => {
        await fetch('http://localhost:9000/users/'+userInfo.id+'/schedules')
        .then ( response => response.json() )
        .then ( data => setScheduleList(data) )
        .catch (e => console.log(e.message))

    },[])

    return (
        <div id='user-page-schedules'>
            <h2>Reservas</h2>
            <div id='schedules-container'>
                {   
                    scheduleList.map(
                        schedules => (
                            <ScheduleCards
                                key={schedules.id}
                                barbershopId={schedules.barbershop_id}
                                barbershopName={schedules.name}
                                barbershopAddress={schedules.address}
                                barbershopImg={schedules.cnpj}
                                barbershopDistrict={schedules.district}
                                barbershopCity={schedules.city}
                                barbershopState={schedules.state}
                                barbershopZipCode={schedules.zip_code}
                                scheduleDateTime={moment(schedules.schedule_datetime).format('DD/MM/YYYY HH:mm')}
                                scheduleStatus={schedules.schedule_status}
                            />
                        )
                    )
                }

            </div>
        </div>
    )
}

export default UserPageSchedules