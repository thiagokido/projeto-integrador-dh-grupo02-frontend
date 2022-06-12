import './styles.css'
import barbershopImgOne from '../../images/barbearia-santo-bigode.jpg'
import { useNavigate } from 'react-router-dom'

function BarbershopCard ({ name, address, district, city, state, zipCode, phoneNumber, email, barbershopId, cnpj }) {

    const navigate = useNavigate()

    function handleSubmit() {
        navigate('/barbershop/'+barbershopId)
    }

    return (
        <div id='card'>
            <div id='card-img'>
                <img src={cnpj} alt="" />
            </div>
            <div id='card-info'>
                <h1>{name}</h1>
                <div id='card-address'>
                    <p>Endereço:</p>
                    <p>{address + ' - ' + district}</p>
                    <p>{city + ' - ' + state}</p>
                    <p>{zipCode}</p>
                </div>
                <div id="card-contacts">
                    <p>Telefone: {phoneNumber}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
            <input id='card-schedule' type="submit" value="Agendar" onClick={handleSubmit}/>
        </div>
    )
}

export default BarbershopCard