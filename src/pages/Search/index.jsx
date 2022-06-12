import './styles.css';
import SearchBoxProvider from '../../contexts/SearchBoxContext';
import { useState } from 'react';

import BarbershopSearchFilterBox from '../../components/barbershop-search-filter';
import BarbershopSearchResults from '../../components/barbershop-search-results';

function Search() {

    const {city, setCity} = useState('Busque por cidade')

    return (
        <SearchBoxProvider>
            <div id='search'>
                <BarbershopSearchFilterBox/>
                <BarbershopSearchResults/>
            </div>

        </SearchBoxProvider>
    )
}

export default Search