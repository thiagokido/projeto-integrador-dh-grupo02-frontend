import './styles.css'
import { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ServiceContext } from '../../contexts/ServiceContext'
import axios from 'axios'

import BarbershopServiceCard from '../barbershop-service-card'

function BarbershopFormServices () {

    const navigate = useNavigate();

    const { barbershopId } = useParams();
    const { serviceUpdate, setServiceUpdate } = useContext( ServiceContext )

    const [ serviceList, setServiceList ] = useState([]);
    const [ service, setService ] = useState();
    const [ price, setPrice ] = useState();
    const [ submited, setSubmited] =useState(0);

    function handleService (e) {
        setService(e.target.value)
    }

    function handlePrice (e) {
        setPrice(e.target.value)
    }

    async function handleSubmit (e) {
        e.preventDefault()

        const serviceCreate ={
            barbershop_id: barbershopId,
            service: service,
            price: price
        }

        await axios.post('http://localhost:9000/barbershop/service/register', serviceCreate)
        .then (function(response) {
            console.log(response)
            if (submited == 0){
                setSubmited(1)
            } else {
                setSubmited(0)
            }
        })
        .catch (e => console.log(e.message))

    }

    useEffect( async () => {
        await axios.get('http://localhost:9000/barbershop/services/'+barbershopId)
        .then(function (response) {
            console.log(response.data)
            setServiceList(response.data)
        })
    },[submited, serviceUpdate])

    useEffect(() => {
        console.log(serviceList)
    },[serviceList])
 
    return (
        <div id='barbershop-form-services'>
            <div id='services-form'>
                <h3>Registro de serviços</h3>
                <form method="POST" encType=''>
                    <input className='register-services-field' type="text" placeholder='Serviço' onChange={e => handleService(e)}/>
                    <input className='register-services-field' type="numeric" placeholder='Preço' onChange={e => handlePrice(e)}/>
                    <input id='services-submit' type="submit" value='Cadastrar' onClick={e => handleSubmit(e)}/>
                    <div id='close-register'><Link to={'../employees/'+barbershopId}>Finalizar</Link></div>
                </form>
            </div>
            <div id='services-list'>
                {
                    serviceList.map( service => (
                        <BarbershopServiceCard 
                            key={service.id}
                            serviceId={service.id} 
                            service={service.service}
                            price={service.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BarbershopFormServices