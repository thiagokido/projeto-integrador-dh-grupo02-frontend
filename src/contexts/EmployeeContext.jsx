import { useState, createContext } from 'react'

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const [ employeeUpdate, setEmployeeUpdate ] = useState(0);

    return (
        <EmployeeContext.Provider value={ {employeeUpdate, setEmployeeUpdate} }>
            {children}
        </EmployeeContext.Provider>
    );
}

export default EmployeeProvider;