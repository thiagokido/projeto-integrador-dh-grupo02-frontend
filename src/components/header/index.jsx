import './styles.css';
import logo from './logo-ibarber-2.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useEffect, useState } from 'react'

function Header() {

    const { userInfo, setUserInfo } = useContext( AuthContext )
    const { userName, setUserName } = useContext( AuthContext )

    
    useEffect(() => {
        setUserName(userInfo.first_name+' '+userInfo.last_name)
    },[userInfo])
    
    return(
        <div id="component-header">
            <div>
                <div id="header-logo">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to='/search'>Buscar uma barbearia</Link>
                    </li>
                    <li><Link to='/barbershop/register/general-info'>Para barbearias</Link></li>
                    <li>Indique uma barbearia</li>
                    <li>Sobre</li>
                    <li>Ajuda</li>
                </ul>
            </div>
            <div id='header-login'>
                <div>
                    <Link to='/login'>{userName}</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;