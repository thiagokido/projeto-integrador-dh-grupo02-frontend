import React, { useState, useContext, useEffect } from 'react'
import './styles.css'
import { SearchBoxContext } from '../../contexts/SearchBoxContext'
import { useParams } from 'react-router-dom'

function BarbershopSearchCitiesSelect() {
    
    const { city, setCity } = useContext( SearchBoxContext )
    const [citiesApi, setCitiesApi] = useState([])
    const [boxStyle, setBoxStyle] = useState('style-hidden')

    const { cityName } = useParams()

    function handleGetCities( cities ) {
        setCitiesApi( cities )
    }
    
    function handleStyle() {
        if (boxStyle == 'style-hidden') {
            setBoxStyle('style-show')
        } else {
            setBoxStyle('style-hidden')
        }

        fetch('http://localhost:9000/barbershop/get-cities')
        .then (response => response.json())
        .then (data => {
            handleGetCities(data)
        })
        .catch (e => console.log(e.message))
    }

    function handleChosenCity(e) {
        setBoxStyle('style-hidden');
        setCity(e)
    }

    useEffect(() => {
        if (cityName) {
            setCity(cityName)
        }
    },[])
    
    return (
        <div id="barbershop-search-cities">
            <div id="barbershop-search-cities-select">
                <p  onClick={handleStyle}>{city}</p>
            </div>
            <div id='scroll'>
                <ul className={boxStyle}>
                    {
                        citiesApi.map( city => (
                            <li className='cities-options' key={city.id} onClick={e => handleChosenCity(e.currentTarget.textContent)}>{city.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default BarbershopSearchCitiesSelect