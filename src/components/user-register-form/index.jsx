import './styles.css'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserRegisterForm () {

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('') 
    const [ cpf, setCpf ] = useState('') 
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ teste, setTeste ] = useState('')

    const navigate = useNavigate();

    function handleFirstNameChange(e) {
        setFirstName(e)
    }

    function handleLastNameChange(e) {
        setLastName(e)
    }

    function handleCpfChange(e) {
        setCpf(e)
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e)
    }

    async function handleEmailChange(e) {
        await axios.post('http://localhost:9000/users/check', {email: e})
        .then( function (response)  {
            if (response.data != 0) {
                setTeste('Já existe um usuário com este e-mail')
            } else {
                setTeste('')
                setEmail(e)
            }
        })
    }

    function handleSubmitUpdate(e) {
        e.preventDefault();
        const createUser = {
            first_name: firstName,
            last_name: lastName,
            cpf: cpf,
            phone_number: phoneNumber,
            email: email
        }
        console.log(createUser)

        axios.post('http://localhost:9000/users/create', createUser)
        .then (response => console.log(response))
        .catch (e => console.log(e))

        navigate('/login')
    }

    return (
        <div id='user-register-form'>
            <form method="POST">
                <legend>Faça seu cadastro</legend>
                <input className='user-register-field' type="text" placeholder='Primeiro nome' name='first' onBlur={e => handleFirstNameChange(e.target.value)}/>
                <input className='user-register-field' type="text" placeholder='Sobrenome' name='last' onBlur={e => handleLastNameChange(e.target.value)}/>
                <input className='user-register-field' type="text" placeholder='CPF' name='cpf'onBlur={e => handleCpfChange(e.target.value)}/>
                <input className='user-register-field' type="email" placeholder='Endereço de email' name='email' onBlur={e => handleEmailChange(e.target.value)}/>
                <p>{teste}</p>
                <input className='user-register-field' type="phone" placeholder='Celular' name='celular' onChange={e => handlePhoneNumberChange(e.target.value)}/>
                <input className='user-register-field' type="password" placeholder='Senha' name='senha'/>
                <input className='user-register-submit' type="submit" value={'ENVIAR'} onClick={e => handleSubmitUpdate(e)}/>
            </form>
        </div>
    )
}

export default UserRegisterForm