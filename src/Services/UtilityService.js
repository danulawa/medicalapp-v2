import axios from 'axios';

const UTILITY_API_BASE_URL ="http://localhost:9090/api/v1/utility"
class UtilityService {

    getUtility(){
        return axios.get(UTILITY_API_BASE_URL);
    }

    createUtility(utility){
        return axios.post(UTILITY_API_BASE_URL, utility);
    }

    getUtilityById(utilityId){
        return axios.get(UTILITY_API_BASE_URL + '/' + utilityId);
    }

    updateUtility(utility,utilityId){
        return axios.put(UTILITY_API_BASE_URL + '/' + utilityId,utility);
    }

    deleteUtility(utilityId){
        return axios.delete(UTILITY_API_BASE_URL + '/' + utilityId);
    }


}
export default new UtilityService()