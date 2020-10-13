import React, { Component } from 'react';
import NotificationServices from '../../../Services/NotificationServices';

class CreateNotificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            NotificationName:'',
            NotificationBody:'',
            Date:''
        }

        this.changeNotificationNameHandler = this.changeNotificationNameHandler.bind(this);
        this.changeNotificationBodyHandler = this.changeNotificationBodyHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this); 
        this.saveNotification = this.saveNotification.bind(this);
    }

    saveNotification = (e) => {
        e.preventDefault();
        let Notification = {NotificationName: this.state.NotificationName, NotificationBody: this.state.NotificationBody, Date: this.state.Date};
        console.log('Notification=> ' + JSON.stringify(Notification));
    }
    

    changeNotificationNameHandler= (event) => {
        this.setState({NotificationName: event.target.value});
    }

    changeNotificationBodyHandler= (event) => {
        this.setState({NotificationBody: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({Date: event.target.value});
    }

    cancel() {
        this.props.history.push('/channeling/notifications');
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
                                            <input placeholder="Notification Name" name="NotificationName" className="form-control" 
                                            value={this.state.NotificationName} onChange={this.changeNotificationNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Notification Body: </label>
                                            <input placeholder="Notification Body" name="NotificationBody" className="form-control" 
                                            value={this.state.NotificationBody} onChange={this.changeNotificationBodyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Year/Month/Date" name="Date" className="form-control" 
                                            value={this.state.Date} onChange={this.changeDateHandler}/>
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