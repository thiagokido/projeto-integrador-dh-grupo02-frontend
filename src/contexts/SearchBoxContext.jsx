import { useState, createContext } from 'react'

export const SearchBoxContext = createContext();

const SearchBoxProvider = ({ children }) => {
    const [ city, setCity ] = useState('Busque por cidade');
    const [ district, setDistrict ] = useState('Busque por bairro');
    const [ barbershopAll, setBarbershopAll ] = useState([])

    return (
        <SearchBoxContext.Provider value={ {city, setCity, district, setDistrict, barbershopAll, setBarbershopAll} }>
            {children}
        </SearchBoxContext.Provider>
    );
}

export default SearchBoxProvider;
