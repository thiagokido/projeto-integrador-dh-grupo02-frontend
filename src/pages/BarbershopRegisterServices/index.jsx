import './styles.css'
import BarbershopFormServices from '../../components/barbershop-form-services'
import ServiceProvider from '../../contexts/ServiceContext';

function BarbershopRegisterServices () {
    return (
        <div id='barbershop-register-services'>
            <ServiceProvider>
                <BarbershopFormServices/>
            </ServiceProvider>
        </div>
    )
}

export default BarbershopRegisterServices