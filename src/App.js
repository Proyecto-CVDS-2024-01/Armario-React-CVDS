import React, {useEffect, Component} from 'react';

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios'; 

class App extends React.Component {
  state={
    data:[],
    modalInsertar:false,
    form:{
      employeeId:'',
      firstName:'',
      lastName:'',
      role:'',
      salary:'',
      tipoModal:''
    }
  }

  peticionGet=()=>{
    const url='http://localhost:8080/employee/employees';
    axios.get(url).then((response)=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
  }

  peticionPost=async()=>{
    const url='http://localhost:8080/employee/addEmployee';
    await axios.post(url,this.state.form).then((response)=>{
      this.modalInsertar();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message);
    })
  }

  peticionPut=()=>{
    const url='http://localhost:8080/employee/update/';
    axios.put(url+this.state.form.employeeId, this.state.form).then((response)=>{
      this.modalInsertar();
      this.peticionGet();
    })
  }

  peticionDelete=()=>{
    const url='http://localhost:8080/employee/delete/';
    console.log(this.state.form.employeeId);
    axios.delete(url+this.state.form.employeeId).then(response=>{
      this.peticionGet();
    })
  }

  modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
  }

  seleccionarEmpleado=(empleado)=>{
    this.setState({
      tipoModal: 'Actualizar',
      form:{
        employeeId:empleado.employeeId,
        firstName:empleado.firstName,
        lastName:empleado.lastName,
        role:empleado.role,
        salary:empleado.salary
      }
    })
  }

  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form);
  };

  componentDidMount(){
    this.peticionGet();
  };

  render(){
    const {form}=this.state;
    return (
      <div className='App'>
        <br />
        <button className='btn btn-success' onClick={()=>{this.setState({form:null, tipoModal:'insertar'}); this.modalInsertar()}}>Agregar</button>
        <br /><br />
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Role</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data?.map((employee =>{
              return (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeId}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.role}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <button className='btn btn-primary' onClick={()=>{this.seleccionarEmpleado(employee); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                    <button className='btn btn-danger' onClick={()=>{this.setState({
                                                                            form:{
                                                                              employeeId:employee.employeeId,
                                                                              firstName:employee.firstName,
                                                                              lastName:employee.lastName,
                                                                              role:employee.role,
                                                                              salary:employee.salary
                                                                            }
                                                                          }); this.peticionDelete()}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                  </td>
                </tr>
              )}
            )
          )}
          </tbody>
        </table>
        <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader style={{display:'block'}}>
              <span style={{float:'right'}}></span>
            </ModalHeader>
            <ModalBody>
              <div className='form-group'>
                <label htmlFor='employeeId'>employeeId</label>
                <input className='form-control' type='text' name='employeeId' id='employeeId' onChange={this.handleChange} value={form?form.employeeId: ''}/>
                <br />
                <label htmlFor='firstName'>firstName</label>
                <input className='form-control' type='text' name='firstName' id='firstName' onChange={this.handleChange} value={form?form.firstName: ''}/>
                <br />
                <label htmlFor='lastName'>lastName</label>
                <input className='form-control' type='text' name='lastName' id='lastName' onChange={this.handleChange} value={form?form.lastName: ''}/>
                <br />
                <label htmlFor='role'>role</label>
                <input className='form-control' type='text' name='role' id='role' onChange={this.handleChange} value={form?form.role: ''}/>
                <br />
                <label htmlFor='salary'>salary</label>
                <input className='form-control' type='text' name='salary' id='salary' onChange={this.handleChange} value={form?form.salary: ''}/>
              </div>
            </ModalBody>
            <ModalFooter>
              {this.state.tipoModal=='insertar'?
              <button className='btn btn-success' onClick={()=>this.peticionPost()}>
                Insertar
              </button>: <button className='btn btn-primary' onClick={()=>this.peticionPut()}>
              Actualizar 
              </button>}
              <button className='btn btn-danger' onClick={()=>this.modalInsertar()}>Cancelar</button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;

