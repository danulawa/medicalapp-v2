import axios from 'axios';

const DOCTOR_API_BASE_URL ="http://localhost:8080/api/v1/doctors";

class DoctorService {

    getDoctors(){
        return axios.get(DOCTOR_API_BASE_URL);
    }

    createDoctor(doctor){
        return axios.post(DOCTOR_API_BASE_URL, doctor);
    }

    getDoctorById(doctorId){
        return axios.get(DOCTOR_API_BASE_URL + '/' + doctorId);
    }

    updateDoctor(doctor, doctorId){
        return axios.put(DOCTOR_API_BASE_URL + '/' + doctorId, doctor);
    }

    deleteDoctor(doctorId){
        return axios.delete(DOCTOR_API_BASE_URL + '/' + doctorId);
    }

}

export default new DoctorService()