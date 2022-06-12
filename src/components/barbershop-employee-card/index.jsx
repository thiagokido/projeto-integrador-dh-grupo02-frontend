import './styles.css'
import { useContext } from 'react'
import { EmployeeContext } from '../../contexts/EmployeeContext'
import axios from 'axios'

function BarbershopEmployeeCard ({employeeId, name, email}) {

    const { employeeUpdate, setEmployeeUpdate } = useContext( EmployeeContext )

    async function handleUpdate (e) {
        e.preventDefault()

        const employee = {
            employeeId: employeeId
        }

        await axios.post('http://localhost:9000/barbershop/employees/delete',employee)
        .then ( function(response) {
            if (employeeUpdate == 0) {
                setEmployeeUpdate(1)
            } else {
                setEmployeeUpdate(0)
            }
        })
        .catch ( error => console.log(error.message))
    }

    return (
        <div id='barbershop-employee-card'>
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={e => handleUpdate(e)}>Excluir</button>
        </div>
    )
}

export default BarbershopEmployeeCard