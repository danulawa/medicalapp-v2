import React, { Component } from 'react';
import DoctorService from '../../../Services/DoctorService';

class ListDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            doctors: []

        }
        this.addDoctor = this.addDoctor.bind(this);
        this.editDoctor = this.editDoctor.bind(this);
        this.deleteDoctor = this.deleteDoctor.bind(this);
    }

    deleteDoctor(id){
        DoctorService.deleteDoctor(id).then( res => {
            this.setState({doctors: this.state.doctors.filter(doctor => doctor.id !== id)});
        });
    }
    viewDoctor(id){
        this.props.history.push(`/view-doctor/${id}`);
    }
    editDoctor(id){
        this.props.history.push(`/add-doctor/${id}`);
    }
    
    
    componentDidMount(){
        DoctorService.getDoctors().then((res) => {

            this.setState({ doctors: res.data});
        });
    }

    addDoctor(){
        this.props.history.push('/add-doctor/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Doctor List</h2>
                <div className ="row">
                <button className="btn btn-primary" onClick={this.addDoctor}> Add Doctor</button>

                </div>
                 <br></br>
                 <div className = "row">

                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Doctor Full Name</th>
                                <th>Doctor NIC</th>
                                <th>Doctor Specialization</th>
                                <th>Doctor Department</th>
                                <th>Doctor Contact Number</th>
                                <th>Doctor Address</th>
                                <th>Doctor Email</th>
                                <th>Doctor Registration Date</th>
                                <th>Actions</th>
                                
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.doctors.map(
                                    doctor =>
                                    <tr key = {doctor.id}>
                                        <td>{ doctor.fullName}</td>
                                        <td>{ doctor.nic}</td>
                                        <td>{ doctor.specialization}</td>
                                        <td>{ doctor.department}</td>
                                        <td>{ doctor.contactnumber}</td>
                                        <td>{ doctor.address}</td>
                                        <td>{ doctor.email}</td>
                                        <td>{ doctor.registrationdate}</td>

                                        <td>
                                            <tr>
                                                <td>
                                                 <button onClick={ () => this.editDoctor(doctor.id)} className="btn btn-info">Update </button>
                                                </td>
                                                <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDoctor(doctor.id)} className="btn btn-danger">Delete </button>
                                                </td>
                                                <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDoctor(doctor.id)} className="btn btn-info">View </button>
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


export default ListDoctorComponent;
