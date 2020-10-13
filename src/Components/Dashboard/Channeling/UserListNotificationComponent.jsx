import React, { Component } from 'react';
import NotificationServices from '../../../Services/NotificationServices';

class UserListNotificationComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            notification: []
        }
    }

    componentDidMount(){
        NotificationServices.getNotificatons().then((res) => {
         this.setState({notification: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Notification Center</h2>
                <br></br>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th className="text-center"> Notification Name</th>
                                    <th className="text-center"> Notification Body</th>
                                    <th className="text-center"> Notifiaction Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.notification.map(
                                        notify =>
                                        <tr key = {notify.id}>
                                             <td> {notify.notify_name}</td>
                                             <td> {notify.notify_body} </td>
                                             <td> {notify.notify_date}</td> 
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

export default UserListNotificationComponent;