import React, { Component } from 'react';
import NotificationServices from '../../../Services/NotificationServices';

class ViewNotificationComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            notification: {}
        }
    }

    componentDidMount(){
        NotificationServices.getNotificationById(this.state.id).then( res => {
            this.setState({notification: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Notification Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Notification Name: </label>
                            <div> { this.state.notification.notify_name }</div>
                        </div>
                        <div className = "row">
                            <label> Notification Body: </label>
                            <div> { this.state.notification.notify_body }</div>
                        </div>
                        <div className = "row">
                            <label> Notification Date: </label>
                            <div> { this.state.notification.notify_date }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ViewNotificationComponent;