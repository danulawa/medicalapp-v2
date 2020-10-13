import axios from 'axios';
const LAB_API_BASE_URL = "http://localhost:8080/api/v1/labs";


class LabService{
    getLabDetails(){
        return axios.get(LAB_API_BASE_URL);
         }

         createLab(lab){
            return axios.post(LAB_API_BASE_URL, lab);
        }

        getLabDetailsById(labId){
                return axios.get(LAB_API_BASE_URL + '/' + labId);
        }

        updateLabDetails(lab, labId){
            return axios.put(LAB_API_BASE_URL +'/'+ labId, lab);
        }


deleteLabDetails(labId){
    return axios.delete(LAB_API_BASE_URL + '/' + labId);
}

}

export default new LabService()