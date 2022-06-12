import './styles.css';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function FormLogin() {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [ userId, setUserID ] = useState('')
    const { userInfo, setUserInfo } = useContext( AuthContext );


    async function handleLogin(e) {

        e.preventDefault();
        
        const newEmail = {
            email: email
        }

        const options = {
            method: "POST",
            body: JSON.stringify(newEmail)
        }
            
        await axios.post('http://localhost:9000/users/login', newEmail)
        .then( response => setUserInfo(response.data))
        .catch(error => console.log(error))
    }

    function handleCreateUser(e) {
        e.preventDefault()
        navigate('/user/register')
    }

    useEffect(() => {
        setUserID(userInfo.id)
        if (userInfo.id) {
            navigate('/user/'+userInfo.id)
        }
    },[userInfo])

    return (
        <div id="form-login">
            <form method="POST">
                <legend>Faça seu login</legend>
                <input className='login-field' type="email" placeholder='Endereço de email' name='email' onChange={e => setEmail(e.target.value)}/>
                <input className='login-field' type="password" placeholder='Senha' name='senha'/>
                <input className='login-submit' type="submit" onClick={handleLogin}/>
            </form>
            <div>
                <p>Esqueci minha senha</p>
                <p onClick={e => handleCreateUser(e)}>Ainda não tenho um cadastro</p>
            </div>
        </div>
    )
}

export default FormLogin