import './styles.css'
import { useState, useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext} from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import UserPageRegister from '../../components/user-page-register'
import UserPageSchedules from '../../components/user-page-schedules'

function UserPage () {

    const { userInfo, setUserInfo } = useContext( AuthContext)
    const { userName, setUserName } = useContext( AuthContext )
    const [ styleData, setStyleData ] = useState({display: 'flex'})
    const [ styleSchedule, setStyleSchedule] =useState({display: 'none'})
    const schedules = useRef(null)
    const navigate = useNavigate()

    let { userId } = useParams();

    const handleStyleSchedules = (e) => {
        e.preventDefault();
        setStyleData({display: 'none'})
        setStyleSchedule({display: 'flex'})
    }

    const handleStyleData = (e) => {
        e.preventDefault();
        setStyleData({display: 'flex'})
        setStyleSchedule({display: 'none'})
    }

    const handleLogout = (e) => {
        e.preventDefault();
        setUserInfo({
            id: '',
            first_name: 'LOGIN',
            last_name: '',
            email: '',
        });
        setUserName('LOGIN');
    }

    useEffect(() => {
        if (userInfo.id == '') {
            navigate('/login')
        }
    })

    return (
        <div id='user-page'>
            <div id='user-page-menu'>
                <div id='username'>{userName}</div>
                <ul id="user-page-menu-list">
                    <li onClick={handleStyleData}>Meus dados</li>
                    <li onClick={handleStyleSchedules}>Reservas</li>
                    <li>Favoritos (Em breve)</li>
                    <li>Avaliações (Em breve)</li>
                    <li onClick={handleLogout}>Sair</li>
                </ul>
            </div>
            <div id='user-page-sections' ref={schedules}>
                <div className='teste' style={styleData}>
                    <UserPageRegister/>
                </div>
                <div className="teste" style={styleSchedule}>
                    <UserPageSchedules />
                </div>
            </div>
        </div>
    )
}

export default UserPage