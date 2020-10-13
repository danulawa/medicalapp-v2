import React, { Component } from 'react'
import EmployeeService from '../../../Services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
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
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({fullName: employee.fullName,
                    nic: employee.nic,
                    dateofbirth : employee.dateofbirth,
                    department : employee.department,
                    desination : employee.desination,
                    contactnumber:employee.contactnumber,
                    address : employee.address,
                    email : employee.email,
                    registrationdate : employee.registrationdate,
                    
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {fullName: this.state.fullName, nic: this.state.nic, dateofbirth: this.state.dateofbirth,department: this.state.department,desination: this.state.desination,address: this.state.address,email: this.state.email,registrationdate: this.state.registrationdate};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/intuser/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/intuser/employees');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                            <label> Designation: </label>
                                            <input placeholder="Designation" name="desination" className="form-control" 
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

export default CreateEmployeeComponent