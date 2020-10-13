import React, { Component } from 'react';
import PatientService from '../../../Services/PatientService';

class UpdatePatientComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

            id: this.props.match.params.id,
            name:'',
            nic:'',
            address:'',
            phone:'',
            email:'',
            gender:'',
            dob:'',
            serveType:'',
            date:'',
            payment:''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeNICHandler=this.changeNICHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changePhoneHandler=this.changePhoneHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.changeDOBHandler=this.changeDOBHandler.bind(this);
        this.changeServeTypeHandler=this.changeServeTypeHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changePaymentHandler=this.changePaymentHandler.bind(this);

        this.updatePatient = this.updatePatient.bind(this);
    }

    componentDidMount(){
        PatientService.getPatientById(this.state.id).then( (res) =>{
            let patient = res.data;
            this.setState({name: patient.name,
            nic:patient.nic,
            address:patient.address,
            phone:patient.phone,
            email:patient.email,
            gender:patient.gender,
            dob:patient.dob,
            serveType:patient.serveType,
            date:patient.date,
            payment:patient.payment
            });
        });
    }

    updatePatient = (p) => {
        p.preventDefault();
        
        let patient = {name:this.state.name,nic:this.state.nic,address:this.state.address,
            phone:this.state.phone,email:this.state.email,gender:this.state.gender,
            dob:this.state.dob,serveType:this.state.serveType,date:this.state.date,payment:this.state.payment
        };
        
        if(this.state.name === ''|| this.state.nic === ''|| this.state.address === ''|| this.state.gender === ''
        || this.state.dob === ''|| this.state.serveType === ''|| this.state.payment === ''||this.state.phone === ''||this.state.email === '' 
        || this.state.date === '' )
        {alert("Please fill all the fields....")}
                
                
        
                else{
                    console.log('patient =>' + JSON.stringify(patient));
            PatientService.updatePatient(patient, this.state.id).then(res =>{
                this.props.history.push('/extuser/patients');});
            };}
    


    changeNameHandler= (event) =>{
        this.setState({name: event.target.value});
    }
    changeNICHandler= (event) =>{
        this.setState({nic: event.target.value});
    }
    changeAddressHandler= (event) =>{
        this.setState({address: event.target.value});
    }
    changePhoneHandler= (event) =>{
        this.setState({phone: event.target.value});
    }
    changeEmailHandler= (event) =>{
        this.setState({email: event.target.value});
    }
    changeGenderHandler= (event) =>{
        this.setState({gender: event.target.value});
    }
    changeDOBHandler= (event) =>{
        this.setState({dob: event.target.value});
    }
    changeServeTypeHandler= (event) =>{
        this.setState({serveType: event.target.value});
    }
    changeDateHandler= (event) =>{
        this.setState({date: event.target.value});
    }
    changePaymentHandler= (event) =>{
        this.setState({payment: event.target.value});
    }

    cancel(){
        this.props.history.push('/extuser/patients');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className= "text-center">Update Patient</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                            
                                        <input placeholder="Name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler}required/>
                                    </div>
                                    <div className = "form-group">
                
                                        <input placeholder="NIC" maxlength="10" name="nic" className="form-control" 
                                        value={this.state.nic} onChange={this.changeNICHandler}required/>
                                    </div>
                                    <div className = "form-group">
                    
                                        <input placeholder="Address" name="address" className="form-control" 
                                        value={this.state.address} onChange={this.changeAddressHandler}required/>
                                    </div>
                                    <div className = "form-group">
                                        
                                        <input placeholder="Phone Number" name="phone" maxLength="10" className="form-control" 
                                        value={this.state.phone} onChange={this.changePhoneHandler}required/>
                                    </div>
                                    <div className = "form-group">
                                        
                                        <input type="email" placeholder="E-mail Address" name="email" className="form-control" 
                                        value={this.state.email} onChange={this.changeEmailHandler}required/>
                                    </div>
                                    <div className = "form-group">
                                        
                                        <input placeholder="Gender" name="gender" className="form-control" 
                                        value={this.state.gender} onChange={this.changeGenderHandler}required/>
                                    </div>
                                    <div className = "form-group">
                                        
                                        <input placeholder="Date of Birth (mm/dd/yyyy)" name="dob" className="form-control" 
                                        value={this.state.dob} onChange={this.changeDOBHandler}required/>
                                    </div>
                                    <div className = "form-group">
                                    
                                        <input placeholder="Expected Service Type" name="serveType" className="form-control" 
                                        value={this.state.serveType} onChange={this.changeServeTypeHandler}required/>
                                    </div>
                                    <div className = "form-group">
                                       
                                        <input type="date" placeholder="Date" name="date" className="form-control" 
                                        value={this.state.date} onChange={this.changeDateHandler}required/>
                                    </div>
                                    <div className = "form-group">
                                    
                                        <input placeholder="Payments" name="payment" className="form-control" 
                                        value={this.state.payment} onChange={this.changePaymentHandler}required/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updatePatient}>Save Changes</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} 
                                    style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>


                        </div>


                    </div>



                </div>
            </div>
        );
    }
}

export default UpdatePatientComponent;