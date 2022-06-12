import './styles.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function UserPageRegister () {

    const [ userCompleteInfo, setUserCompleteInfo ] = useState([])
    const [ firstName, setFirstName ] = useState(userCompleteInfo.first_name)
    const [ lastName, setLastName ] = useState(userCompleteInfo.last_name) 
    const [ cpf, setCpf ] = useState(userCompleteInfo.cpf) 
    const [ phoneNumber, setPhoneNumber ] = useState(userCompleteInfo.phone_number)
    const [ email, setEmail ] = useState(userCompleteInfo.email)
    const [ submited, setSubmited ] = useState(0)

    let { userId } = useParams();
    const navigate = useNavigate();

    function handleFirstNameChange(e) {
        console.log(e)
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

    function handleEmailChange(e) {
        setEmail(e)
    }


    function handleSubmitUpdate(e) {
        e.preventDefault();
        console.log(userCompleteInfo)
        const userUpdate = {
            first_name: firstName,
            last_name: lastName,
            cpf: cpf,
            phone_number: phoneNumber,
            email: email
        }
        console.log(userUpdate)

        axios.post('http://localhost:9000/users/'+userId, userUpdate)
        .then (response => console.log(response))
        .then (navigate('/login'))
        .catch (e => console.log(e))

        setSubmited(1)
    }

    useEffect(async () => {
        await fetch('http://localhost:9000/users/'+userId)
        .then (response => response.json())
        .then (data => {
            setUserCompleteInfo(data[0])
        })
        .catch (error => console.log( error.message))
    },[])

    useEffect(async () => {
        await fetch('http://localhost:9000/users/'+userId)
        .then (response => response.json())
        .then (data => {
            setUserCompleteInfo(data[0])
        })
        .catch (error => console.log( error.message))
        setSubmited(0)
    },[submited])

    useEffect(() => {
        setFirstName(userCompleteInfo.first_name)
        setLastName(userCompleteInfo.last_name)
        setCpf(userCompleteInfo.cpf)
        setPhoneNumber(userCompleteInfo.phone_number)
        setEmail(userCompleteInfo.email)
    },[userCompleteInfo])

    return(
        <div id='user-page-register'>
            <h2>Detalhes da conta</h2>
            <div>
                <label>Primeiro Nome</label>
                <input type="text" required placeholder={userCompleteInfo.first_name} onChange={e => handleFirstNameChange(e.target.value)}/>
            </div>
            <div>
                <label>Sobrenome</label>
                <input type="text" required placeholder={userCompleteInfo.last_name} onChange={e => handleLastNameChange(e.target.value)}/>
            </div>
            <div>
                <label>CPF</label>
                <input type="text" required readOnly placeholder={userCompleteInfo.cpf} onChange={e => handleCpfChange(e.target.value)}/>
            </div>
            <div>
                <label>Celular</label>
                <input type="text" required placeholder={userCompleteInfo.phone_number} onChange={e => handlePhoneNumberChange(e.target.value)} />
            </div>
            <div>
                <label>E-mail</label>
                <input type="email" required placeholder={userCompleteInfo.email} onChange={e => handleEmailChange(e.target.value)}/>
            </div>
            <input type="submit" value={'Alterar dados'} onClick={e => handleSubmitUpdate(e)}/>
        </div>
    )
}

export default UserPageRegister