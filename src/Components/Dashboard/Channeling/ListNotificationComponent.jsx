import React, { Component } from 'react';
import NotificationServices from '../../../Services/NotificationServices';

class ListNotificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notification: []
        }
        this.addNotification = this.addNotification.bind(this);
        this.editNotification = this.editNotification.bind(this);
        this.deleteNotification = this.deleteNotification.bind(this);
    }

    viewNotification(id){
        this.props.history.push(`/channeling/view-notification/${id}`);
    }

    deleteNotification(id){
        NotificationServices.deleteNotification(id).then( res => {
            this.setState({notification: this.state.notification.filter(notification => notification.id !== id)});
        })
    }

    editNotification(id){
        this.props.history.push(`/channeling/update-notification/${id}`);
    }

    componentDidMount(){
       NotificationServices.getNotificatons().then((res) => {
        this.setState({notification: res.data});
       });
    }

    addNotification(){
        this.props.history.push('/channeling/add-notification');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Notification Center</h2>
                <br></br>
                <div className = "row">
                        <button className="btn btn-primary" onClick={this.addNotification}> Create New Notification</button>
                    </div>
                    <br></br>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th className="text-center"> Notification Name</th>
                                    <th className="text-center"> Notification Body</th>
                                    <th className="text-center"> Notifiaction Date</th>
                                    <th className="text-center"> Actions</th>
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
                                             <td>
                                                <tr>
                                                 <td><button onClick={ () => this.editNotification(notify.id)} className="btn btn-info">Update </button>
                                                 </td>
                                                 <td><button style={{marginLeft: "10px"}} onClick={ () => this.deleteNotification(notify.id)} className="btn btn-danger">Delete </button>
                                                 </td>
                                                 <td><button style={{marginLeft: "10px"}} onClick={ () => this.viewNotification(notify.id)} className="btn btn-info">View </button>
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

export default ListNotificationComponent;