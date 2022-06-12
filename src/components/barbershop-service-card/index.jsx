import './styles.css'
import { useContext } from 'react'
import { ServiceContext } from '../../contexts/ServiceContext'
import axios from 'axios'

function BarbershopServiceCard ({serviceId, service, price}) {

    const { serviceUpdate, setServiceUpdate } = useContext( ServiceContext )

    async function handleUpdate (e) {
        e.preventDefault()

        const service = {
            serviceId: serviceId
        }

        await axios.post('http://localhost:9000/barbershop/services/delete',service)
        .then ( function(response) {
            if (serviceUpdate == 0) {
                setServiceUpdate(1)
            } else {
                setServiceUpdate(0)
            }
        })
        .catch ( error => console.log(error.message))
    }

    return (
        <div id='barbershop-service-card'>
            <h2>{service}</h2>
            <p>R${price},00</p>
            <button onClick={e => handleUpdate(e)}>Excluir</button>
        </div>
    )
}

export default BarbershopServiceCard