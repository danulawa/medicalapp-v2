import React, { Component } from 'react'
import EmployeeService from '../../../Services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Full Name: </label>
                            <div> { this.state.employee.Fullname }</div>
                        </div>
                        <div className = "row">
                            <label> Employee NIC: </label>
                            <div> { this.state.employee.nic }</div>
                        </div>
                        <div className = "row">
                            <label> Employee DateOfBirth: </label>
                            <div> { this.state.employee.dateofbirth }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Department: </label>
                            <div> { this.state.employee.department }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Designation: </label>
                            <div> { this.state.employee.desination }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Contact Number: </label>
                            <div> { this.state.employee.contactnumber }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Address: </label>
                            <div> { this.state.employee.address }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email: </label>
                            <div> { this.state.employee.email }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Registration Date: </label>
                            <div> { this.state.employee.registrationdate }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent