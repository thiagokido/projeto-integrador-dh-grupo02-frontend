import './styles.css'
import BarbershopFormEmployees from '../../components/barbershop-form-employees'
import EmployeeProvider from '../../contexts/EmployeeContext';

function BarbershopRegisterEmployees () {
    return (
        <div id='barbershop-register-employees'>
            <EmployeeProvider>
                <BarbershopFormEmployees/>
            </EmployeeProvider>
        </div>
    )
}

export default BarbershopRegisterEmployees