import axios from 'axios';
const DRUG_API_BASE_URL = "http://localhost:8080/api/v1/drug";
export const DRUG = "http://localhost:8080/api/v1/drug";

class DrugService {

    getDrugs(){
        return axios.get(DRUG_API_BASE_URL);
    }

    createDrug(drug){
        return axios.post(DRUG_API_BASE_URL, drug);
    }

    getDrugById(drugId){
        return axios.get(DRUG_API_BASE_URL + '/' + drugId);
    }

    updateDrug(drug, drugId){
        return axios.put(DRUG_API_BASE_URL + '/' + drugId, drug);
    }

    deleteDrug(drugId){
        return axios.delete(DRUG_API_BASE_URL + '/' + drugId);
    }

}

export default new DrugService()