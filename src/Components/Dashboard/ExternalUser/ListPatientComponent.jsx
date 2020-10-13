import React, { Component } from 'react';
import PatientService from '../../../Services/PatientService';

class ListPatientComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

                patients: []
        }
        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.deletePatient = this.deletePatient.bind(this);
    }

        deletePatient = (id) => {
            PatientService.deletePatient(id).then( res => {
                // this.setState({patients: this.state.patients.filter(patient => patient.id !== id)});
                PatientService.getPatients().then((res) => {
                    this.setState({ patients: res.data});
                });
            });
        }

        editPatient = (id) =>
        {
            this.props.history.push(`extuser/update-patient/${id}`);
        }

        componentDidMount(){
            PatientService.getPatients().then((res) => {
                this.setState({ patients: res.data});
            });
        }
        
        addPatient(){
            this.props.history.push('extuser/add-patient');
        }

    render() {
        return (
            <div>
                <h2 className="text-center">Patient Details</h2>
                <div className="row">
                    <button   style={{marginBottom:"10px"}} className="btn btn-primary" onClick={this.addPatient}>Add Patient</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>NIC</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>E-mail</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                <th>Service Type</th>
                                <th>Date</th>
                                <th>Payments</th>
                                <th>Update/Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.patients.map(
                                    patient=>
                                    <tr key = {patient.patientId}>
                                        <td>{patient.name}</td>
                                        <td>{patient.nic}</td>
                                        <td>{patient.address}</td>
                                        <td>{patient.phone}</td>
                                        <td>{patient.email}</td>
                                        <td>{patient.gender}</td>
                                        <td>{patient.dob}</td>
                                        <td>{patient.serveType}</td>
                                        <td>{patient.date}</td>
                                        <td>{patient.payment}</td>
                                        <td><button onClick = {()=> this.editPatient(patient.patientId)} className="btn btn-info">Update</button>
                                            <button style={{marginTop:"10px"}} onClick = {()=> this.deletePatient(patient.patientId)} className="btn btn-danger">Delete</button>
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

export default ListPatientComponent;