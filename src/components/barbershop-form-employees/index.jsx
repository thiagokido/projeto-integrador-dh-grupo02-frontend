import './styles.css'
import { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { EmployeeContext } from '../../contexts/EmployeeContext'
import axios from 'axios'

import BarbershopEmployeeCard from '../barbershop-employee-card'

function BarbershopFormEmployees () {

    const navigate = useNavigate();

    const { barbershopId } = useParams();
    const { employeeUpdate, setEmployeeUpdate } = useContext( EmployeeContext )

    const [ employeeList, setEmployeeList ] = useState([]);
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ submited, setSubmited] =useState(0);

    function handleName (e) {
        setName(e.target.value)
    }

    function handleEmail (e) {
        setEmail(e.target.value)
    }

    async function handleSubmit (e) {
        e.preventDefault()

        const employee ={
            barbershop_id: barbershopId,
            full_name: name,
            email: email
        }

        await axios.post('http://localhost:9000/barbershop/employee/register', employee)
        .then (function(response) {
            console.log(response)
            if (submited == 0){
                setSubmited(1)
            } else {
                setSubmited(0)
            }
        })
        .catch (e => console.log(e.message))
    }

    useEffect( async () => {
        await axios.get('http://localhost:9000/barbershop/employees/'+barbershopId)
        .then(function (response) {
            console.log(response.data)
            setEmployeeList(response.data)
        })
    },[submited, employeeUpdate])

    useEffect(() => {
        console.log(employeeList)
    },[employeeList])
 
    return (
        <div id='barbershop-form-employees'>
            <div id='employee-form'>
                <h3>Registro de funcionários</h3>
                <form method="POST" encType=''>
                    <input className='register-employee-field' type="text" placeholder='Nome' onChange={e => handleName(e)}/>
                    <input className='register-employee-field' type="email" placeholder='Endereço de email' onChange={e => handleEmail(e)}/>
                    <input id='employee-submit' type="submit" value='Cadastrar' onClick={e => handleSubmit(e)}/>
                    <div id='close-register'><Link to={'/'}>Finalizar</Link></div>
                </form>
            </div>
            <div id='employee-list'>
                {
                    employeeList.map( employee => (
                        <BarbershopEmployeeCard 
                            key={employee.id}
                            employeeId={employee.id} 
                            name={employee.full_name}
                            email={employee.email}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BarbershopFormEmployees