import './styles.css'
import BarbershopCard from '../barbershop-card'
import {useParams} from 'react-router-dom'
import { SearchBoxContext } from '../../contexts/SearchBoxContext'
import { useEffect, useContext, useState } from 'react'

function BarbershopSearchResults () {

    const { cityName, districtName } = useParams()

    const { barbershopAll, setBarbershopAll } = useContext( SearchBoxContext )
    
    useEffect( async ()=> {
        if ( districtName ) {
            console.log('Bairro')
            await fetch('http://localhost:9000/barbershop/search/'+cityName+'/'+districtName)
            .then(response => response.json())
            .then(data => {
                setBarbershopAll(data)
            })
            .catch( e => console.log(e.message))
        } else if ( cityName ) {
            console.log('Cidade')
            await fetch('http://localhost:9000/barbershop/search/'+cityName)
            .then(response => response.json())
            .then(data => {
                setBarbershopAll(data)
            })
            .catch( e => console.log(e.message))
        } else {
            console.log('Nada')
            await fetch('http://localhost:9000/barbershop/search')
            .then( response => response.json())
            .then( data => {
                setBarbershopAll(data)
            })
            .catch( e => console.log(e.message))
        }
    },[])
    
    console.log(barbershopAll)

    return (
        <div id='search-results'>
            <h1>Resultados</h1>
            <div id='result-cards'>
                {
                    barbershopAll.map(
                        barbershop => (
                            <BarbershopCard 
                                key={barbershop.id} 
                                name={barbershop.name} 
                                address={barbershop.address}
                                zipCode={barbershop.zip_code}
                                district={barbershop.district}
                                city={barbershop.city}
                                state={barbershop.state}
                                phoneNumber={barbershop.phone_number}
                                email={barbershop.email} 
                                barbershopId={barbershop.id}
                                cnpj={barbershop.cnpj}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default BarbershopSearchResults