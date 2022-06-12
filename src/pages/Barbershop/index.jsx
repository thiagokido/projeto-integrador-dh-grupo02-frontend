import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'
import moment from 'moment';
import { AuthContext} from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Barbershop () {

    let { barbershopId } = useParams();

    const navigate = useNavigate()

    const { userInfo, setUserInfo } = useContext( AuthContext )
    const [ barbershopInfo, setBarbershopInfo] = useState([])
    const [ barbershopServices, setBarbershopServices ] = useState([])
    const [ barbershopEmployees, setBarbershopEmployees ] = useState([])
    const [ timesSchedule, setTimesSchedule] = useState([])
    const [ data, setData ] = useState()
    const [ time, setTime ] = useState([])
    const [ service, setService] = useState()
    const [ employee, setEmployee] = useState()

    const today = new Date();
    const minDate = moment(today).format('YYYY-MM-DD')
    
    function handleData (e) {
        setData(e)
    }

    function handleTime (e) {
        setTime(e)
    }

    function handleService (e) {
        setService(e)
    }

    function handleEmployee(e) {
        setEmployee(e)
    }

    async function handleSchedule(e) {
        e.preventDefault()
        if (userInfo.id) {
            const schedule = {
                customer_id: userInfo.id,
                barbershop_id: barbershopInfo.id,
                employee_service_id: barbershopEmployees[0].id,
                barbershop_service_id: barbershopServices[0].id,
                schedule_datetime: moment(data+' '+time).format('YYYY-MM-DD HH:mm:ss'),
                estimated_endtime: moment(data+' '+time).format('YYYY-MM-DD HH:mm:ss')            
            }
    
            await axios.post('http://localhost:9000/barbershop/schedule', schedule)
            .then (data => console.log(data))
            .catch (e => console.log(e.message))

            navigate('/user/'+userInfo.id)

        } else {
            navigate('/login')
        }
        
    }

    useEffect(async () => {
        if (data && employee) {
            await axios.get('http://localhost:9000/barbershop/'+barbershopId+'/slots?date='+data+'&employee='+employee)
            .then( function (response) {
                setTimesSchedule(response.data)
            })
            .catch( e => console.log(e.message))
        }

    },[data, employee])

    useEffect ( async () => {
        // await fetch('http://localhost:9000/barbershop/' + barbershopId)
        await axios.get('http://localhost:9000/barbershop/' + barbershopId)
        .then( function (response) {
            setBarbershopInfo(response.data.barbershops[0])
            setBarbershopServices(response.data.barbershopServices)
            setBarbershopEmployees(response.data.barbershopEmployees)
        })
        .catch( e => console.log(e.message))
    },[])
    return (
        <div id='barbershop'>
            <div id='barbershop-header'>
                <div id='main-photo'>
                    <img src={barbershopInfo.cnpj} alt="" />
                </div>
                <div id='header-description'>
                    <div>
                        <h2>Sobre a {barbershopInfo.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <h2>Endereço</h2>
                        <p>{barbershopInfo.address + ' - ' + barbershopInfo.district}</p>
                        <p>{barbershopInfo.city + ' - ' + barbershopInfo.state}</p>
                        <p>{barbershopInfo.zip_code}</p>
                    </div>
                    <div>
                        <h2>Contatos</h2>
                        <p>Telefone: {barbershopInfo.phone_number}</p>
                        <p>E-mail: {barbershopInfo.email}</p>
                    </div>
                </div>
                <div id='header-schedule'>
                    <h2>Reserve um horário</h2>
                    <div id='schedule-container'>
                        <label>Selecione um serviço:</label>
                        <select name="service" onChange={ e => handleService(e.target.value)}>
                            <option value="default">-</option>
                            {   
                                barbershopServices.map(
                                    service => (<option key={service.id} value={service.id}>{service.service} - R$ {service.price},00</option>)
                                )
                            }
                        </select>
                        <label>Selecione um profissional:</label>
                        <select name="employee" onChange={ e => handleEmployee(e.target.value)}>
                            <option value="default">-</option>
                            {   
                                barbershopEmployees.map(
                                    employee => (<option key={employee.id} value={employee.id}>{employee.full_name}</option>)
                                )
                            }
                        </select>
                        <label>Selecione uma data:</label>    
                        <input type="date" min={minDate} onChange={ e => handleData(e.target.value)}/>
                        <label>Selecione um horário:</label>
                        <select name="time" onChange={ e => handleTime(e.target.value)}>
                            <option value="default">-</option>
                            {
                                timesSchedule.map(
                                    time => (<option key={time}>{time}</option>)
                                )
                            }
                        </select>
                        <div onClick={e => handleSchedule(e)}>Agendar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Barbershop