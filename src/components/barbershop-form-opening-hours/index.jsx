import './styles.css'
import { useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function BarbershopFormOpeningHours () {

    const { barbershopId } = useParams();

    const navigate = useNavigate()

    const times = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00',]

    const [ domOpened, setDomOpened ] = useState(false) 
    const [ domOpTime, setDomOpTime ] = useState('')
    const [ domClTime, setDomClTime ] = useState('')
    const domingo = {
        barbershop_id: barbershopId,
        weekday: 0,
        opened: domOpened,
        opening_time: domOpTime,
        closing_time: domClTime
    }

    const [ segOpened, setSegOpened ] = useState(false) 
    const [ segOpTime, setSegOpTime ] = useState('')
    const [ segClTime, setSegClTime ] = useState('')
    const segunda = {
        barbershop_id: barbershopId,
        weekday: 1,
        opened: segOpened,
        opening_time: segOpTime,
        closing_time: segClTime
    }

    const [ terOpened, setTerOpened ] = useState(false) 
    const [ terOpTime, setTerOpTime ] = useState('')
    const [ terClTime, setTerClTime ] = useState('')
    const terca = {
        barbershop_id: barbershopId,
        weekday: 2,
        opened: terOpened,
        opening_time: terOpTime,
        closing_time: terClTime
    }

    const [ quaOpened, setQuaOpened ] = useState(false) 
    const [ quaOpTime, setQuaOpTime ] = useState('')
    const [ quaClTime, setQuaClTime ] = useState('')
    const quarta = {
        barbershop_id: barbershopId,
        weekday: 3,
        opened: quaOpened,
        opening_time: quaOpTime,
        closing_time: quaClTime
    }

    const [ quiOpened, setQuiOpened ] = useState(false) 
    const [ quiOpTime, setQuiOpTime ] = useState('')
    const [ quiClTime, setQuiClTime ] = useState('')
    const quinta = {
        barbershop_id: barbershopId,
        weekday: 4,
        opened: quiOpened,
        opening_time: quiOpTime,
        closing_time: quiClTime
    }

    const [ sexOpened, setSexOpened ] = useState(false) 
    const [ sexOpTime, setSexOpTime ] = useState('')
    const [ sexClTime, setSexClTime ] = useState('')
    const sexta = {
        barbershop_id: barbershopId,
        weekday: 5,
        opened: sexOpened,
        opening_time: sexOpTime,
        closing_time: sexClTime
    }

    const [ satOpened, setSatOpened ] = useState(false) 
    const [ satOpTime, setSatOpTime ] = useState('')
    const [ satClTime, setSatClTime ] = useState('')
    const sabado = {
        barbershop_id: barbershopId,
        weekday: 6,
        opened: satOpened,
        opening_time: satOpTime,
        closing_time: satClTime
    }

    function handleSunday (e) {
        console.log(e)
        if ( e.target.name == 0 ) {
            console.log(e.target.checked)
            setDomOpened(e.target.checked)
        } else if ( e.target.name == 'opening-time'){
            setDomOpTime(e.target.value)
        } else if ( e.target.name == 'closing-time'){
            setDomClTime(e.target.value)
        }
        console.log(domingo)
    }

    function handleMonday (e) {
        console.log(e)
        if ( e.target.name == 1 ) {
            setSegOpened(e.target.checked)
        } else if ( e.target.name == 'opening-time'){
            setSegOpTime(e.target.value)
        } else if ( e.target.name == 'closing-time'){
            setSegClTime(e.target.value)
        }
        console.log(segunda)
    }

    function handleTuesday (e) {
        console.log(e)
        if ( e.target.name == 2 ) {
            setTerOpened(e.target.checked)
        } else if ( e.target.name == 'opening-time'){
            setTerOpTime(e.target.value)
        } else if ( e.target.name == 'closing-time'){
            setTerClTime(e.target.value)
        }
    }

    function handleWednesday (e) {
        console.log(e)
        if ( e.target.name == 3 ) {
            setQuaOpened(e.target.checked)
        } else if ( e.target.name == 'opening-time'){
            setQuaOpTime(e.target.value)
        } else if ( e.target.name == 'closing-time'){
            setQuaClTime(e.target.value)
        }
    }

    function handleThursday (e) {
        console.log(e)
        if ( e.target.name == 4 ) {
            setQuiOpened(e.target.checked)
        } else if ( e.target.name == 'opening-time'){
            setQuiOpTime(e.target.value)
        } else if ( e.target.name == 'closing-time'){
            setQuiClTime(e.target.value)
        }
    }

    function handleFriday (e) {
        console.log(e)
        if ( e.target.name == 5 ) {
            setSexOpened(e.target.checked)
        } else if ( e.target.name == 'opening-time'){
            setSexOpTime(e.target.value)
        } else if ( e.target.name == 'closing-time'){
            setSexClTime(e.target.value)
        }
    }

    function handleSaturday (e) {
        console.log(e)
        if ( e.target.name == 6 ) {
            setSatOpened(e.target.checked)
        } else if ( e.target.name == 'opening-time'){
            setSatOpTime(e.target.value)
        } else if ( e.target.name == 'closing-time'){
            setSatClTime(e.target.value)
        }
    }

    async function handleSubmit (e) {
        e.preventDefault()
        const openingHours = {
            domingo, 
            segunda,
            terca,
            quarta,
            quinta,
            sexta,
            sabado
        }

        await axios.post('http://localhost:9000/barbershop/opening-hours/register', openingHours)
        .then( function(response) {
            console.log(response)
            navigate('../services/'+barbershopId)
        })
        .catch( e => console.log(e.message))
    }

    return (
        <div id='barbershop-form-opening-hours'>
            <h3>Configuração de Horários</h3>
            <form method="POST" action='' encType=''>
                <div onChange={e => handleSunday(e)}>
                    <input type="checkbox" name='0'/>
                    <label>Domingo</label>
                    <label>Abre as:</label>
                    <select name="opening-time" id="opening-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'open'+time}>{time}</option>)
                            )
                        }
                    </select>
                    <label>Fecha as:</label>
                    <select name="closing-time" id="closing-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'closing'+time}>{time}</option>)
                            )
                        }
                    </select>
                </div>
                <div onChange={e => handleMonday(e)}>
                    <input type="checkbox" name='1'/>
                    <label>Segunda-feira</label>
                    <label>Abre as:</label>
                    <select name="opening-time" id="opening-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'open'+time}>{time}</option>)
                            )
                        }
                    </select>
                    <label>Fecha as:</label>
                    <select name="closing-time" id="closing-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'closing'+time}>{time}</option>)
                            )
                        }
                    </select>
                </div>
                <div onChange={e => handleTuesday(e)}>
                    <input type="checkbox" name='2'/>
                    <label>Terça-feira</label>
                    <label>Abre as:</label>
                    <select name="opening-time" id="opening-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'open'+time}>{time}</option>)
                            )
                        }
                    </select>
                    <label>Fecha as:</label>
                    <select name="closing-time" id="closing-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'closing'+time}>{time}</option>)
                            )
                        }
                    </select>
                </div>
                <div onChange={e => handleWednesday(e)}>
                    <input type="checkbox" name='3'/>
                    <label>Quarta-feira</label>
                    <label>Abre as:</label>
                    <select name="opening-time" id="opening-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'open'+time}>{time}</option>)
                            )
                        }
                    </select>
                    <label>Fecha as:</label>
                    <select name="closing-time" id="closing-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'closing'+time}>{time}</option>)
                            )
                        }
                    </select>
                </div>
                <div onChange={e => handleThursday(e)}>
                    <input type="checkbox" name='4'/>
                    <label>Quinta-feira</label>
                    <label>Abre as:</label>
                    <select name="opening-time" id="opening-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'open'+time}>{time}</option>)
                            )
                        }
                    </select>
                    <label>Fecha as:</label>
                    <select name="closing-time" id="closing-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'closing'+time}>{time}</option>)
                            )
                        }
                    </select>
                </div>
                <div onChange={e => handleFriday(e)}>
                    <input type="checkbox" name='5'/>
                    <label>Sexta-feira</label>
                    <label>Abre as:</label>
                    <select name="opening-time" id="opening-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'open'+time}>{time}</option>)
                            )
                        }
                    </select>
                    <label>Fecha as:</label>
                    <select name="closing-time" id="closing-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'closing'+time}>{time}</option>)
                            )
                        }
                    </select>
                </div>
                <div onChange={e => handleSaturday(e)}>
                    <input type="checkbox" name='6'/>
                    <label>Sábado</label>
                    <label>Abre as:</label>
                    <select name="opening-time" id="opening-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'open'+time}>{time}</option>)
                            )
                        }
                    </select>
                    <label>Fecha as:</label>
                    <select name="closing-time" id="closing-time">
                        <option>-</option>
                        {
                            times.map(
                                time => (<option key={'closing'+time}>{time}</option>)
                            )
                        }
                    </select>
                </div>
                <input type="submit" onClick={e => handleSubmit(e)}/>
            </form>
        </div>
    )
}

export default BarbershopFormOpeningHours