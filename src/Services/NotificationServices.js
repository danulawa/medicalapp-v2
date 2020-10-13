import axios from 'axios';

const NOTIFICATION_BASE_API_URL = "http://localhost:8080/api/v1/notification";

class NotificationServices {
    getNotificatons(){
        return axios.get(NOTIFICATION_BASE_API_URL);
    }

    createNotification(notification){
        return axios.post(NOTIFICATION_BASE_API_URL, notification);
    }

    getNotificationById(notificationID){
        return axios.get(NOTIFICATION_BASE_API_URL + '/' + notificationID);
    }

    updateNotification(notification, notificationID){
        return axios.put(NOTIFICATION_BASE_API_URL + '/' + notificationID, notification);
    }

    deleteNotification(notificationID){
        return axios.delete(NOTIFICATION_BASE_API_URL + '/' + notificationID);
    }
}

export default new NotificationServices()