import { useState, createContext } from 'react'

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
    const [ serviceUpdate, setServiceUpdate ] = useState(0);

    return (
        <ServiceContext.Provider value={ {serviceUpdate, setServiceUpdate} }>
            {children}
        </ServiceContext.Provider>
    );
}

export default ServiceProvider;