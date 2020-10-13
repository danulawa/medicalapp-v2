import React, { Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []

        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/intuser/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/intuser/add-employee/${id}`);
    }
    
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {

            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/intuser/add-employee/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className ="row">
                <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>

                </div>
                 <br></br>
                 <div className = "row">

                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee Full Name</th>
                                <th>Employee NIC</th>
                                <th>Employee Date of Birth</th>
                                <th>Employee Department</th>
                                <th>Employee Desination</th>
                                <th>Employee Contact Number</th>
                                <th>Employee Address</th>
                                <th>Employee Email</th>
                                <th>Employee Registration Date</th>
                                <th>Actions</th>
                                
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{ employee.fullName}</td>
                                        <td>{ employee.nic}</td>
                                        <td>{ employee.dateofbirth}</td>
                                        <td>{ employee.department}</td>
                                        <td>{ employee.desination}</td>
                                        <td>{ employee.contactnumber}</td>
                                        <td>{ employee.address}</td>
                                        <td>{ employee.email}</td>
                                        <td>{ employee.registrationdate}</td>

                                        <td>
                                            <tr>
                                                <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                </td>
                                                <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                </td>
                                                <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                                 </td>
                                            </tr>
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}


export default ListEmployeeComponent;
