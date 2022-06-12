import './styles.css'
import { SearchBoxContext } from '../../contexts/SearchBoxContext'
import React, { useState, useContext, useEffect } from 'react'

import BarbershopSearchCitiesSelect from '../barbershop-search-cities-select'
import BarbershopSearchDistrictsSelect from '../barbershop-search-districts-select'

function BarbershopSearchFilterBox () {

    const { city, setCity } = useContext( SearchBoxContext )
    const { district, setDistrict} = useContext( SearchBoxContext )
    const { barbershopAll, setBarbershopAll } = useContext( SearchBoxContext )

    async function handleFilter( e ) {
        e.preventDefault()
        if ( city != 'Busque por cidade' && district != 'Busque por bairro') {
            await fetch('http://localhost:9000/barbershop/search/'+city+'/'+district)
            .then(response => response.json())
            .then(data => {
                setBarbershopAll(data)
            })
            .catch( e => console.log(e.message))
        } else if ( city != 'Busque por cidade' && district == 'Busque por bairro') {
            await fetch('http://localhost:9000/barbershop/search/'+city)
            .then(response => response.json())
            .then(data => {
                setBarbershopAll(data)
            })
            .catch( e => console.log(e.message))
        }
    }

    async function handleReset( e ) {
        setCity('Busque por cidade')
        setDistrict('Busque por bairro')
        await fetch('http://localhost:9000/barbershop/search')
        .then( response => response.json())
        .then( data => {
            setBarbershopAll(data)
        })
        .catch( e => console.log(e.message))
    }

    return (
        <div id='filter-box'>
            <h1>Filtros</h1>
            <div id='label'>
                <p>Cidade</p>
            </div>
            <div className="search-page">
                <BarbershopSearchCitiesSelect/>
            </div>
            <div id='label'>
                <p>Bairro</p>
            </div>
            <div className='search-page'>
                <BarbershopSearchDistrictsSelect/>
            </div>
            <input className='apply-filter' type="submit" value="Aplicar filtros" onClick={ e => handleFilter( e ) }/>
            <input className='reset-filter' type="submit" value="Excluir filtros" onClick={ e => handleReset( e )}/>
        </div>       
    )
}

export default BarbershopSearchFilterBox