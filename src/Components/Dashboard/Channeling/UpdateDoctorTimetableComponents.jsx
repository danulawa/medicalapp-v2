import React, { Component } from 'react';
import TimetableServices from '../../../Services/TimetableServices';

class UpdateDoctorTimetableComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {

            shiftID: this.props.match.params.shiftID,
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: ''
        }

        this.changeMondayHandler = this.changeMondayHandler.bind(this);
        this.changeTuesdayHandler = this.changeTuesdayHandler.bind(this);
        this.changeWednesdayHandler = this.changeWednesdayHandler.bind(this);
        this.changeThursdayHandler = this.changeThursdayHandler.bind(this);
        this.changeFridayHandler = this.changeFridayHandler.bind(this);
        this.changeSaturdayHandler = this.changeSaturdayHandler.bind(this);
        this.changeSundayHandler = this.changeSundayHandler.bind(this);
        this.updateDocTimetable = this.updateDocTimetable.bind(this);
    }


    componentDidMount(){
        TimetableServices.getDocTimetableByID(this.state.shiftID).then( (res) =>{
            let Timetable = res.data;
            this.setState({monday : Timetable.monday,
            tuesday : Timetable.tuesday,
            wednesday : Timetable.wednesday,
            thursday : Timetable.thursday,
            friday : Timetable.friday,
            saturday : Timetable.saturday, 
            sunday : Timetable.sunday });
            });
    }

    updateDocTimetable = (e) => {
        e.preventDefault();
        let Timetable = {monday: this.state.monday,
            tuesday: this.state.tuesday,
            wednesday: this.state.wednesday,
            thursday: this.state.thursday,
            friday: this.state.friday,
            saturday: this.state.saturday,
            sunday: this.state.sunday};
        console.log('Timetable=> ' + JSON.stringify(Timetable));
        console.log('shiftID => ' + JSON.stringify(this.state.shiftID));

        if(this.state.monday === ''){
            alert("Please enter the list of doctors for the shift on Monday!!!");
        }
        else if(this.state.tuesday === ''){
            alert("Please enter the list of doctors for the shift on Tuesday!!!");
        }
        else if(this.state.wednesday === ''){
            alert("Please enter the list of doctors for the shift on Wednesday!!!");
        }
        else if(this.state.thursday === ''){
            alert("Please enter the list of doctors for the shift on Thursday!!!");
        }
        else if(this.state.friday === ''){
            alert("Please enter the list of doctors for the shift on Friday!!!");
        }
        else if(this.state.saturday === ''){
            alert("Please enter the list of doctors for the shift on Saturday!!!");
        }
        else if(this.state.sunday === ''){
            alert("Please enter the list of doctors for the shift on Sunday!!!");
        }
        else {

            TimetableServices.updateDocTimetable(Timetable, this.state.shiftID).then(res => {
                this.props.history.push('/Doctimetables');
           })
           
        }
    }


    changeMondayHandler= (event) => {
        this.setState({monday: event.target.value});
    }

    changeTuesdayHandler= (event) => {
        this.setState({tuesday: event.target.value});
    }

    changeWednesdayHandler= (event) => {
        this.setState({wednesday: event.target.value});
    }

    changeThursdayHandler= (event) => {
        this.setState({thursday: event.target.value});
    }

    changeFridayHandler= (event) => {
        this.setState({friday: event.target.value});
    }

    changeSaturdayHandler= (event) => {
        this.setState({saturday: event.target.value});
    }

    changeSundayHandler= (event) => {
        this.setState({sunday: event.target.value});
    }

    cancel() {
        this.props.history.push('/Doctimetables');
    }

    

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Update Doctor Timetable Shift</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Monday : </label>
                                            <input placeholder="Monday List" name="monday" className="form-control" 
                                            value={this.state.monday} onChange={this.changeMondayHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Tuesday : </label>
                                            <input placeholder="Tuesday List" name="tuesday" className="form-control" 
                                            value={this.state.tuesday} onChange={this.changeTuesdayHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Wednesday : </label>
                                            <input placeholder="Wednesday List" name="wednesday" className="form-control" 
                                            value={this.state.wednesday} onChange={this.changeWednesdayHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Thursday : </label>
                                            <input placeholder="Thursday List" name="thursday" className="form-control" 
                                            value={this.state.thursday} onChange={this.changeThursdayHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Friday : </label>
                                            <input placeholder="Friday List" name="friday" className="form-control" 
                                            value={this.state.friday} onChange={this.changeFridayHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Saturday : </label>
                                            <input placeholder= "Saturday List" name="saturday" className="form-control" 
                                            value={this.state.saturday} onChange={this.changeSaturdayHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Sunday : </label>
                                            <input placeholder="Sunday List" name="sunday" className="form-control" 
                                            value={this.state.sunday} onChange={this.changeSundayHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateDocTimetable}>Update Shift</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default UpdateDoctorTimetableComponents;