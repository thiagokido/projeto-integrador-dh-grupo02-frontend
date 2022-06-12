import './styles.css'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function BarbershopRegisterForm () {

    const navigate = useNavigate();

    const [ address, setAddress ] = useState('')
    const [ district, setDistrict ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')
    const [ zipCode, setZipCode ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ file, setFile] = useState('')
    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [ phoneNumber, setPhoneNumber] = useState('')

    // async function handleEmailChange(e) {
    //     await axios.post('http://localhost:9000/users/check', {email: e})
    //     .then( function (response)  {
    //         if (response.data != 0) {
    //             setTeste('Já existe um usuário com este e-mail')
    //         } else {
    //             setTeste('')
    //             setEmail(e)
    //         }
    //     })
    // }

    
    async function checkZipCode (e) {
        e.preventDefault();
        await axios.get('http://viacep.com.br/ws/'+e.target.value+'/json/')
        .then( function(response) {
            console.log(response.data)
            setAddress(response.data.logradouro)
            setDistrict(response.data.bairro)
            setCity(response.data.localidade)
            setState(response.data.uf)
            setZipCode(response.data.cep)
        })
        .catch( e => console.log(e.message))
    }

    function handleFile(e) {
        setFile(e.target.value)
    }
   
    function handleName(e) {
        setName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    
    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }

    function handleNumber(e) {
        setNumber(e.target.value)
    }
    
    // function handleSubmitUpdate(e) {
    //     e.preventDefault();
    //     const createBarbershop = {
    //         name: name,
    //         email: email,
    //         phone_number: phoneNumber,
    //         file: file,
    //         address: address,
    //         city: city,
    //         zip_code: zipCode,
    //         district: district,
    //         state: state,
    //         number: number
    //     }
    //     console.log(createBarbershop)

    //     axios.post('http://localhost:9000/barbershop/register', createBarbershop)
    //     .then (response => console.log(response))
    //     .catch (e => console.log(e))

    //     // navigate('/')
    // }

    return (
        <div id='barbershop-register-form'>
            <form method="POST" action='http://localhost:9000/barbershop/register' encType='multipart/form-data'>
                <div id='general-info'>
                    <legend>Dados Gerais</legend>
                    <input type="text" name='name' className='barbershop-register-field' placeholder='Nome da sua barbearia' onChange={e => handleName(e)}/>
                    <input type="email" name='email' className='barbershop-register-field' placeholder='Endereço de email' onChange={e => handleEmail(e)}/>
                    <input type="phone" name='phone_number' className='barbershop-register-field' placeholder='Telefone com DDD' onChange={e => handlePhoneNumber(e)}/>
                    <label>Envie uma foto da sua barbearia</label>
                    <input type="file" name='file' className='barbershop-register-field-photo' onChange={e => handleFile(e)}/>
                </div>
                <div id='address-info'>
                    <legend>Endereço</legend>
                    <input type="text" name='zip_code' className='barbershop-register-field' placeholder='CEP' onBlur={e => checkZipCode(e)}/>
                    <input type="text" name='address' readOnly className='barbershop-register-field' placeholder='Endereço' value={address}/>
                    <input type="text" name='number' className='barbershop-register-field' placeholder='Número' onChange={e => handleNumber(e)}/>
                    <input type="text" name='district' readOnly className='barbershop-register-field' placeholder='Bairro' value={district}/>
                    <input type="text" name='state' readOnly className='barbershop-register-field' placeholder='Estado' value={state}/>
                    <input type="text" name='city' readOnly className='barbershop-register-field' placeholder='Cidade' value={city} />
                    <input type="submit" className='barbershop-register-submit' value='Enviar'/>
                </div>
            </form>
        </div>
    )
}

export default BarbershopRegisterForm