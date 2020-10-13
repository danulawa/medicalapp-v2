import axios from 'axios';

const TIMETABLE_API_BASE_URL = "http://localhost:8080/api/v1/timetable";
const DOCTOR_TIMETABLE_API_BASE_URL = "http://localhost:8080/api/v1/Doctimetable";

class TimetableService {

    //get timetable
    getTimetable(){
        return axios.get(TIMETABLE_API_BASE_URL);
    }

    //get  doctor timetable
    getDocTimetable(){
        return axios.get(DOCTOR_TIMETABLE_API_BASE_URL);
    }

    //get row details by id to update purposes
    getTimetableByID(timetableID){
        return axios.get(TIMETABLE_API_BASE_URL + '/' + timetableID);
    }

    //get doctor timetable row details by id to update purposes
    getDocTimetableByID(timetableID){
        return axios.get(DOCTOR_TIMETABLE_API_BASE_URL + '/' + timetableID);
    }

    //update timetable shifts
    updateTimetable(timetableshift, timetableID){
        return axios.put(TIMETABLE_API_BASE_URL + '/' + timetableID, timetableshift);
    }

    //update doctor timetable shifts
    updateDocTimetable(timetableshift, timetableID){
        return axios.put(DOCTOR_TIMETABLE_API_BASE_URL + '/' + timetableID, timetableshift);
    }

}

export default new TimetableService();