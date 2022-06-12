import React, { useState, useContext, useEffect } from 'react'
import './styles.css'
import { SearchBoxContext } from '../../contexts/SearchBoxContext'
import { useParams } from 'react-router-dom'

function BarbershopSearchDistrictsSelect() {

    const { city, setCity } = useContext( SearchBoxContext )
    
    const { district, setDistrict } = useContext( SearchBoxContext )
    
    const [boxStyle, setBoxStyle] = useState('style-hidden')

    const [districtList, setDistrictList] = useState([{id: 0, name: 'Sem resultados'}])

    const { districtName } = useParams()
    
    function handleStyle() {
        if (boxStyle == 'style-hidden') {
            setBoxStyle('style-show')
        } else {
            setBoxStyle('style-hidden')
        }
    }
    
    function handleChosenDistrict(e) {
        setBoxStyle('style-hidden');
        setDistrict(e)
    }

    function handleGetDistrict (districts) {
        setDistrictList(districts)
    }

    useEffect(() => {
        if (districtName) {
            setDistrict(districtName)
        }
    },[])
    
    useEffect(() => {
        console.log(districtName)
        if (districtName) {
            setDistrict(districtName)
            fetch("http://localhost:9000/barbershop/get-districts/"+city)
            .then (response => response.json())
            .then (data => {
                handleGetDistrict(data)
            })
            .catch (e => console.log(e.message))
        } else {
            setDistrict('Busque por bairro')
            fetch("http://localhost:9000/barbershop/get-districts/"+city)
            .then (response => response.json())
            .then (data => {
                handleGetDistrict(data)
            })
            .catch (e => console.log(e.message))
        }
    },[city])

    return (
        <div id="barbershop-search-districts">
            <div id="barbershop-search-districts-select">
                <p  onClick={handleStyle}>{district}</p>
            </div>
            <div id='scroll'>
                <ul className={boxStyle}>
                    {
                        districtList.map( district => (
                            <li className='districts-options' key={district.id} onClick={e => handleChosenDistrict(e.currentTarget.textContent)}>{district.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default BarbershopSearchDistrictsSelect