import axios from 'axios';
const PAYMENT_API_BASE_URL = "http://localhost:8080/api/v1/phapay";

class PahPaymentService {

    getAllPayments(){
        return axios.get(PAYMENT_API_BASE_URL);
    }

    createPayment(payment){
        return axios.post(PAYMENT_API_BASE_URL, payment);
    }

    getPaymentById(phaPaymentId){
        return axios.get(PAYMENT_API_BASE_URL + '/' + phaPaymentId);
    }

    updatePaymentById(payment, phaPaymentId){
        return axios.put(PAYMENT_API_BASE_URL + '/' + phaPaymentId, payment);
    }

    deletePayment(phaPaymentId){
        return axios.delete(PAYMENT_API_BASE_URL + '/' + phaPaymentId);
    }

}

export default new PahPaymentService()