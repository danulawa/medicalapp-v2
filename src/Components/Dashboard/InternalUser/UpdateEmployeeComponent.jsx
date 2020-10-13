import React, { Component } from 'react'
import EmployeeService from '../../../Services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fullName: '',
            nic: '',
            dateofbirth: '',
            department: '',
            desination: '',
            contactnumber: '',
            address: '',
            email: '',
            registrationdate: ''
        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeNICHandler = this.changeNICHandler.bind(this);
        this.changeDateofBirthHandler = this.changeDateofBirthHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeDesinationHandler = this.changeDesinationHandler.bind(this);
        this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeRegistrationDateHandler = this.changeRegistrationDateHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({fullName: employee.fullName,
                    nic: employee.nic,
                    dateofbirth : employee.dateofbirth,
                    department : employee.department,
                    desination : employee.desination,
                    contactnumber : employee.contactnumber,
                    address : employee.address,
                    email : employee.email,
                    registrationdate : employee.registrationdate,
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {fullName: this.state.fullName, nic: this.state.nic, dateofbirth: this.state.dateofbirth,department: this.state.department,desination: this.state.desination,contactnumber: this.state.contactnumber,address: this.state.address,email: this.state.email,registrationdate: this.state.registrationdate};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/intuser/employees');
        });
    }
    
    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }

    changeNICHandler= (event) => {
        this.setState({nic: event.target.value});
    }

    changeDateofBirthHandler= (event) => {
        this.setState({dateofbirth: event.target.value});
    }

    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }

    changeDesinationHandler= (event) => {
        this.setState({desination: event.target.value});
    }

    changeContactNumberHandler= (event) => {
        this.setState({contactnumber: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeRegistrationDateHandler= (event) => {
        this.setState({registrationdate: event.target.value});
    }
    cancel(){
        this.props.history.push('/intuser/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Full Name: </label>
                                            <input placeholder="Full Name" name="Fullname" className="form-control" 
                                                value={this.state.Fullname} onChange={this.changeFullNameHandler}/>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> NIC: </label>
                                            <input placeholder="NIC" name="nic" className="form-control" 
                                                value={this.state.nic} onChange={this.changeNICHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DateofBirth: </label>
                                            <input placeholder=" DateofBirth" name="dateofbirth" className="form-control" 
                                                value={this.state.dateofbirth} onChange={this.changeDateofBirthHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="Department" name="department" className="form-control" 
                                                value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Desination: </label>
                                            <input placeholder="Desination" name="desination" className="form-control" 
                                                value={this.state.desination} onChange={this.changeDesinationHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="Contact Number" name="contactnumber" className="form-control" 
                                                value={this.state.contactnumber} onChange={this.changeContactNumberHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Registration Date: </label>
                                            <input placeholder="Registration Date" name="registrationdate" className="form-control" 
                                                value={this.state.registrationdate} onChange={this.changeRegistrationDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent