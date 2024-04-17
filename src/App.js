import React, {useState, useEffect} from 'react';

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url='http://localhost:8080/employee/employees';

function App() {
  const [employees, setEmployees] = useState(null);
  const [modal, setModal] = useState(true);

  useEffect(()=>{
    fetch(url).then((response)=> response.json())
    .then((data) => setEmployees(data));
  },[]);

    return (
      <div className='App'>
        <br />
        <button className='btn btn-success' onClick={()=>setModal}>Agregar</button>
        <br /><br />
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee =>{
              return (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeId}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <button className='btn btn-primary'><FontAwesomeIcon icon={faEdit}/></button>
                    <button className='btn btn-danger'><FontAwesomeIcon icon={faTrashAlt}/></button>
                  </td>
                </tr>
              )}
            )
          )}
          </tbody>
        </table>
        <Modal>
            <ModalHeader style={{display:'block'}}>
              <span style={{float:'right'}}></span>
            </ModalHeader>
            <ModalBody>
              <div className='form-group'>
                <label htmlFor='employeeId'>ID</label>
                <input className='form-control' type='text' name='id' id='id' readOnly/>
                <br />
                <label htmlFor='firstName'>firstName</label>
                <input className='form-control' type='text' name='firstName' id='firstName'/>
                <br />
                <label htmlFor='lastName'>lastName</label>
                <input className='form-control' type='text' name='lastName' id='lastName'/>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button className='btn btn-success'>Insertar</Button>
              <Button className='btn btn-danger'>Cancelar</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }

export default App;

