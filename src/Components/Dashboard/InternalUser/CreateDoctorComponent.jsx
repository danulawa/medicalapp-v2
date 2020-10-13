import React, { Component } from 'react'
import DoctorService from '../services/DoctorService';
import * as moment from 'moment';

class CreateDoctorComponent extends Component {
    
    constructor(props) {
        super(props)

        
        
        this.state = {
            id: this.props.match.params.id,
            fullName: '',
            nic: '',
            specialization: '',
            department: '',
            contactnumber: '',
            address: '',
            email: '',
            registrationdate: '',
            fullnameError:'',
            nicError:'',
            emailError:''
        }  
            
        

        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeNICHandler = this.changeNICHandler.bind(this);
        this.changeSpecializationHandler = this.changeSpecializationHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeRegistrationDateHandler = this.changeRegistrationDateHandler.bind(this);
        this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DoctorService.getDoctorById(this.state.id).then( (res) =>{
                let doctor = res.data;
                this.setState({fullName: doctor.fullName,
                    nic: doctor.nic,
                    specialization : doctor.specialization,
                    department : doctor.department,
                    contactnumber: doctor.contactnumber,
                    address : doctor.address,
                    email : doctor.email,
                    registrationdate : doctor.registrationdate,
                    
                });
            });
        }        
    }

    
    saveOrUpdateDoctor = (e) => {
        e.preventDefault();
        let doctor = {fullName: this.state.fullName,
             nic: this.state.nic,
              specialization: this.state.specialization,
              department: this.state.department,
              contactnumber: this.state.contactnumber,
              address: this.state.address,
              email: this.state.email,
              registrationdate: this.state.registrationdate};
        
        console.log('doctor => ' + JSON.stringify(doctor));
        

        if(this.state.fullName === ''){alert("Full name is Required!")}
        else if(this.state.nic === ''){alert("NIC is Required!")}
        else if(this.state.specialization === ''){alert("Specialization is Required!")}
        else if(this.state.department === ''){alert("Department is Required!")}
        else if(this.state.contactnumber === ''){alert("Contact Number is Required!")}
        else if(this.state.address === ''){alert("Address is Required!")}
        else if(this.state.email === ''){alert("Email Address is Required!")}
        else if(this.state.registrationdate === ''){alert("Registration Date is Required!")}
        else{
        // step 5
        if(this.state.nic.includes('@')){
            alert("Incorrect NIC number,it doesn't have symbols");
        }
        else if(this.state.nic.includes('*')){
            alert("Incorrect NIC number,it doesn't have symbols");
        }
        else if(this.state.nic.includes('#')){
            alert("Incorrect NIC number,it doesn't have symbols");
        }
        else if(this.state.nic.includes('!')){
            alert("Incorrect NIC number,it doesn't have symbols");
        }
        else if(this.state.nic.includes('$')){
            alert("Incorrect NIC number,it doesn't have symbols");
        } 
        else if(this.state.nic.includes('^')){
            alert("Incorrect NIC number,it doesn't have symbols");
        }
        else if(!this.state.email.includes('@')){

            alert("Incorrect email!!!");
        }
        else if(this.state.contactnumber.length != 10){
            alert("Incorrect Phone number");
        }
        else if(this.state.nic.length != 10){
            alert("Incorrect  NIC number");
        }        
        else{
            if(this.state.id === '_add'){
                DoctorService.createDoctor(doctor).then(res =>{
                    this.props.history.push('/doctors');
                });
            }else{
                DoctorService.updateDoctor(doctor, this.state.id).then( res => {
                    this.props.history.push('/doctors');
                });
        
            }
        }

        }
        
    }
    
    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }

    changeNICHandler= (event) => {
        this.setState({nic: event.target.value});
    }

    changeSpecializationHandler= (event) => {
        this.setState({specialization: event.target.value});
    }

    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
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
        this.props.history.push('/doctors');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Doctor</h3>
        }else{
            return <h3 className="text-center">Update Doctor</h3>
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
                                            <label> Specialization: </label>
                                            <input placeholder=" Specialization" name="specialization" className="form-control" 
                                                value={this.state.specialization} onChange={this.changeSpecializationHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="Department" name="department" className="form-control" 
                                                value={this.state.department} onChange={this.changeDepartmentHandler}/>
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
                                            <input placeholder="Email" name="email" type = "email" className="form-control" 
                                                value={this.state.email}  onChange={this.changeEmailHandler}/>
                                        </div>

                                        

                                        <div className = "form-group">
                                            <label> Registration Date: </label>
                                            <input className="inputC" type="Date" placeholder="Registration Date" name="registrationdate" className="form-control" 
                                                value={this.state.registrationdate} onChange={this.changeRegistrationDateHandler} max={moment().format("YYYY-MM-DD")}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDoctor}>Save</button>
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

export default CreateDoctorComponent