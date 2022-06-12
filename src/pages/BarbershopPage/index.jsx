import './styles.css'
import BarbershopPageMenu from '../../components/barbershop-page-menu'
import BarbershopLoggedInfo from '../../components/barbershop-logged-info'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function BarbershopPageInfo () {

    let { barbershopId } = useParams()

    const [ barbershopInfo, setBarbershopInfo ] = useState([])

    useEffect(async () => {
        await axios.get('http://localhost:9000/barbershop/'+barbershopId)
        .then( function (response) {
            setBarbershopInfo(response.data.barbershops[0])
        })
    },[])

    return (
        <div id='barbershop-page'>
            <BarbershopPageMenu name={barbershopInfo.name} barbershopId={barbershopInfo.id}/>
            <div id='barbershop-page-sections'>
                <BarbershopLoggedInfo/> 
            </div>
        </div>
    )
}

export default BarbershopPageInfo