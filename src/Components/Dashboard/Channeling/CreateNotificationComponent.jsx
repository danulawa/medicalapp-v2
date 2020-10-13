import React, { Component } from 'react';
import * as moment from 'moment';
import NotificationServices from '../../../Services/NotificationServices';
class CreateNotificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            notify_name:'',
            notify_body:'',
            notify_date:''
        }

        this.changeNotificationNameHandler = this.changeNotificationNameHandler.bind(this);
        this.changeNotificationBodyHandler = this.changeNotificationBodyHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this); 
        this.saveNotification = this.saveNotification.bind(this);
    }


    saveNotification = (e) => {
        e.preventDefault();
        let Notification = {notify_name: this.state.notify_name,
            notify_body: this.state.notify_body,
            notify_date: this.state.notify_date};

        console.log('Notification=> ' + JSON.stringify(Notification));

        if(this.state.notify_name === ''){
            alert("Notify Name must be included!")
        }
        else if(this.state.notify_body === ''){
            alert("Notification Body or Message must not be Empty!!!")
        }
        else if(this.state.notify_date === ''){
            alert("Please insert the date!!!")
        }
        else{
            NotificationServices.createNotification(Notification).then(res => {
                this.props.history.push('/notifications');
            });
        }
        
    }
    

    changeNotificationNameHandler= (event) => {
        this.setState({notify_name: event.target.value});
    }

    changeNotificationBodyHandler= (event) => {
        this.setState({notify_body: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({notify_date: event.target.value});
    }

    cancel() {
        this.props.history.push('/notifications');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Create New Notification</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Notification Name: </label>
                                            <input placeholder="Notification Name" name="notify_name" className="form-control" 
                                            value={this.state.notify_name} onChange={this.changeNotificationNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Notification Body: </label>
                                            <input placeholder="Notification Body" name="notify_body" className="form-control" 
                                            value={this.state.notify_body} onChange={this.changeNotificationBodyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input className="inputC" type="Date" placeholder="Year/Month/Date" name="notify_date" className="form-control" 
                                            value={this.state.notify_date} onChange={this.changeDateHandler} max = {moment().format("YYYY-MM-DD")}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveNotification}>Create</button>
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

export default CreateNotificationComponent;