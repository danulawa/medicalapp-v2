import axios from 'axios';
const  EQUIPMENT_API_BASE_URL ='http://localhost:8080/api/v1/equipment';
class EquipmentService{
    getEquipment(){
        return axios.get(EQUIPMENT_API_BASE_URL);
    }
    createEquipment(equipment){
        return axios.post(EQUIPMENT_API_BASE_URL,equipment);
    }

    getEquipmentById(eqId){
        return axios.get(EQUIPMENT_API_BASE_URL + '/' + eqId);
    }

    updateEquipment(equipment,eqId){
        return axios.put(EQUIPMENT_API_BASE_URL +'/' + eqId,equipment);
    }

    printDetails(equipment,eqId){
        return axios.put(EQUIPMENT_API_BASE_URL +'/' + eqId,equipment);
    }

    deleteEquipment(eqId){
        return axios.delete(EQUIPMENT_API_BASE_URL + '/' + eqId);
    }
}

export default  new EquipmentService()