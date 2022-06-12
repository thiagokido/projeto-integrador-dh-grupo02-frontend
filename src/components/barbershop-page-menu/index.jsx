import './styles.css'
import { Link, useParams } from 'react-router-dom'

function BarbershopPageMenu ({name, barbershopId}) {

    return (
        <div id='barbershop-page-menu'>
                <div id='barbershop-name'>{name}</div>
                <ul id="barbershop-page-menu-list">
                    <li><Link to={'/barbershop/logged/info/'+barbershopId}>Meus dados</Link></li>
                    <li>Reservas</li>
                    <li><Link to={'/barbershop/logged/opening-hours/'+barbershopId}>Horários</Link></li>
                    <li>Horários</li>
                    <li>Funcionários</li>
                    <li>Sair</li>
                </ul>
        </div>
    )
}

export default BarbershopPageMenu