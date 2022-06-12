import './styles.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


function BarbershopLoggedInfo () {

    let { barbershopId } = useParams()

    const [ barbershopInfo, setBarbershopInfo ] = useState([])

    useEffect(async () => {
        await axios.get('http://localhost:9000/barbershop/'+barbershopId)
        .then( function (response) {
            setBarbershopInfo(response.data.barbershops[0])
        })
    },[])

    return (
        <div id='barbershop-logged-info'>
            <h2>Dados da barbearia</h2>
            <input readOnly type="text" defaultValue={barbershopInfo.name} placeholder='Nome da barbearia'/>
            <input readOnly type="email" defaultValue={barbershopInfo.email} placeholder='Endereço de email'/>
            <input readOnly type="phone" defaultValue={barbershopInfo.phone_number} placeholder='Telefone'/>
            <input readOnly type="text" defaultValue={barbershopInfo.address} placeholder='Endereço'/>
            <input readOnly type="text" defaultValue={barbershopInfo.district} placeholder='Bairro'/>
            <input readOnly type="text" defaultValue={barbershopInfo.city} placeholder='Cidade'/>
            <input readOnly type="text" defaultValue={barbershopInfo.state} placeholder='Estado'/>
            <input readOnly type="text" defaultValue={barbershopInfo.zip_code} placeholder='CEP'/>
        </div>
    )
}

export default BarbershopLoggedInfo