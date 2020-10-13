import React, { Component } from 'react'
import DoctorService from '../../../Services/DoctorService'

class ViewDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            doctor: {}
        }
    }

    componentDidMount(){
        DoctorService.getDoctorById(this.state.id).then( res => {
            this.setState({doctor: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Doctor Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Doctor Full Name: </label>
                            <div> { this.state.doctor.Fullname }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor NIC: </label>
                            <div> { this.state.doctor.nic }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor Specialization: </label>
                            <div> { this.state.doctor.specialization }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor Department: </label>
                            <div> { this.state.doctor.department }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Doctor Contact Number: </label>
                            <div> { this.state.doctor.contactnumber }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor Address: </label>
                            <div> { this.state.doctor.address }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor Email: </label>
                            <div> { this.state.doctor.email }</div>
                        </div>
                        <div className = "row">
                            <label> Doctor Registration Date: </label>
                            <div> { this.state.doctor.registrationdate }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDoctorComponent