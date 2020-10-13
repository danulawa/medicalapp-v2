import React, { Component } from 'react';
import LabService from '../../../Services/LabService';

class LabReportComponent extends Component {
constructor(props){
    super(props)

    this.state = {
        labDetails:[]
    }
    this.addLabDetails = this.addLabDetails.bind(this);
    this.editLabDetails = this.editLabDetails.bind(this);
    this.deleteLabDetails = this.deleteLabDetails.bind(this);


}
deleteLabDetails(labId){
    LabService.deleteLabDetails(labId).then(res => {
        this.setState({labDetails: this.state.labDetails.filter(lab=> lab.labId!== labId )});
    });
}

editLabDetails(labId){
    this.props.history.push(`/lab/update-lab/${labId}`);
}

componentDidMount(){
    LabService.getLabDetails().then((res)=>{
        this.setState({labDetails: res.data});

    } );
}

addLabDetails(){
    this.props.history.push('/lab/add-labDetails');
}

    render() {
        return (
            <div>                 
                <h2 className="text-center">Lab Report</h2>
                <div className="row">
                    <button className="btn btn-dark" onClick={this.addLabDetails}>Add new Lab Report</button>
                </div>
                <div className = "row">
                    <table className = "table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Lab ID </th>
                                <th>Lab Test </th>
                                <th>Test Result </th>
                                <th>Patient </th>
                                <th>Gender</th>
                                <th>Consultant </th>
                                <th>date</th>
                                <th>time</th>   
                                <th>Action</th>   
                                                     
                            </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.labDetails.map(
                                        lab=>
                                        <tr key= {lab.labId}>    
                                              <td>{lab.labId} </td>                                                                                      
                                            <td>{lab.labTest} </td>
                                            <td>{lab.testResult} </td>
                                            <td>{lab.patient} </td>
                                            <td>{lab.gender} </td>
                                            <td>{lab.consultant} </td>
                                            <td>{lab.date} </td>
                                            <td>{lab.time} </td>
                                            <td>
                                                <button style={{ marginBottom:"10px"}} onClick= {() => this.editLabDetails(lab.labId)}  className="btn btn-success">Update Report</button>                                              
                                                <button   onClick={ () => this.deleteLabDetails(lab.labId)} className="btn btn-danger">Delete Report</button>
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

export default LabReportComponent;