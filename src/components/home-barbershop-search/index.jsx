import './styles.css';
import React, { useState, useEffect, useContext } from 'react';
import { SearchBoxContext } from '../../contexts/SearchBoxContext'
import { useNavigate } from 'react-router-dom'

import BarbershopSearchCitiesSelect from '../barbershop-search-cities-select'
import BarbershopSearchDistrictsSelect from '../barbershop-search-districts-select'

function HomeSearch(){

    const navigate = useNavigate();

    const { city, setCity } = useContext( SearchBoxContext )
    const { district, setDistrict } = useContext( SearchBoxContext )

    function handleSearch(e) {
        e.preventDefault();
        console.log(city)
        console.log(district)
        if (city == 'Busque por cidade') {
            navigate('/search')
        } else if (city != 'Busque por cidade' && district == 'Busque por bairro') {
            navigate('/search/'+city)
        } else {
            navigate('/search/'+city+'/'+district)
        }

    }

    return (
        <div id='home-search'>
            <h1>ENCONTRE UMA BARBEARIA</h1>
            <form method="get">
                <div>
                    <div id='label-cities'>
                        <p>Cidade</p>
                    </div>
                    <BarbershopSearchCitiesSelect/>
                </div>
                <div>
                    <div id='label-cities'>
                        <p>Bairro</p>
                    </div>
                    <BarbershopSearchDistrictsSelect/>
                </div>
                <input type='submit' value="Buscar barbearia" onClick={handleSearch}/>
            </form>
        </div>
    )
}

export default HomeSearch;