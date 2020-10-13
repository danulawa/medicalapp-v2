import React, { Component } from 'react';
import DrugService from '../../../Services/DrugService';

class ManageDrugComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            drugId: this.props.match.params.drugId,
            genericName: '',
            tradeName: '',
            manuDate: '',
            expDate: '',
            unitPrice: '',
            quantity: '',
            storageLocation: 'Cupboard',
            bufferStock: '',
            department: '1',
            supplierId: '1'

        }

        this.changeGenericNameHandler = this.changeGenericNameHandler.bind(this);
        this.changeTradeNameHandler = this.changeTradeNameHandler.bind(this);
        this.changeManuDateHandler = this.changeManuDateHandler.bind(this);
        this.changeExpDateHandler = this.changeExpDateHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeStorageLocationHandler = this.changeStorageLocationHandler.bind(this);
        this.changeBufferStockHandler = this.changeBufferStockHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeSupplierIdHandler = this.changeSupplierIdHandler.bind(this);

        this.saveOrUpdateDrug = this.saveOrUpdateDrug.bind(this);

    }

    componentDidMount(){
        if (this.state.drugId === 'add') {
            return
        } else {
            DrugService.getDrugById(this.state.drugId).then((res) =>{
                let drug = res.data

                this.setState({
                    genericName: drug.genericName,
                    tradeName: drug.tradeName,
                    manuDate: drug.manuDate,
                    expDate: drug.expDate,
                    unitPrice: drug.unitPrice,
                    quantity: drug.quantity,
                    storageLocation: drug.storageLocation,
                    bufferStock: drug.bufferStock,
                    department: drug.department,
                    supplierId: drug.supplierId
                });
            });
        }
    }

    saveOrUpdateDrug = (d) => {
        d.preventDefault();

        let drug = {
            genericName: this.state.genericName, 
            tradeName: this.state.tradeName,
            manuDate: this.state.manuDate,
            expDate: this.state.expDate,
            unitPrice: this.state.unitPrice,
            quantity: this.state.quantity,
            storageLocation: this.state.storageLocation,
            bufferStock: this.state.bufferStock,
            department: this.state.department,
            supplierId: this.state.supplierId
        };

        console.log('drug => ' + JSON.stringify(drug));
        console.log('drugId => ' + JSON.stringify(this.state.drugId));

        if(this.state.genericName === ''){alert("Generic Name is Required!")}
        else if(this.state.tradeName === ''){alert("Trade Name is Required!")}
        else if(this.state.unitPrice <= 0){alert("Unit Price cannot be Null or Negative!")}
        else if(this.state.quantity <= 0){alert("Quantity cannot be Null or Negative!")}
        else if(this.state.manuDate === ''){alert("Manufacture Date is Required!")}
        else if(this.state.expDate === ''){alert("Expiry Date is Required!")}
        else if(this.state.bufferStock <= 0){alert("Buffer Stock cannot be Null or Negative!")}
        else{
            if(this.state.drugId === 'add'){
                DrugService.createDrug(drug).then(res => (
                    this.props.history.push('/pharmacy/all-drugs')
                ));
            } else {
                DrugService.updateDrug(drug, this.state.drugId).then((res) => (
                    this.props.history.push(`/pharmacy/view-drug/${this.state.drugId}`)
                )); 
            }
        }
    }

    changeGenericNameHandler = (event) => {
        this.setState({genericName: event.target.value});
    }

    changeTradeNameHandler = (event) => {
        this.setState({tradeName: event.target.value});
    }

    changeManuDateHandler = (event) => {
        this.setState({manuDate: event.target.value});
    }

    changeExpDateHandler = (event) => {
        this.setState({expDate: event.target.value});
    }

    changeUnitPriceHandler = (event) => {
        this.setState({unitPrice: event.target.value});
    }

    changeQuantityHandler = (event) => {
        this.setState({quantity: event.target.value});
    }

    changeStorageLocationHandler = (event) => {
        this.setState({storageLocation: event.target.value});
    }

    changeBufferStockHandler = (event) => {
        this.setState({bufferStock: event.target.value});
    }

    changeDepartmentHandler = (event) => {
        this.setState({department: event.target.value});
    }

    changeSupplierIdHandler = (event) => {
        this.setState({supplierId: event.target.value});
    }

    getTitle(){
        if(this.state.drugId === 'add'){return <h1 class="h2">Pharmacy - New Drug</h1>}
        else{return <h1 class="h2">Pharmacy - Update Drug</h1>}
    }

    cancel(){
        this.props.history.push('/pharmacy/all-drugs');
    }

    render() {
        return (
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    {this.getTitle()}
                </div>
                <div className = "container py-5">
                    <div className = "row">
                        <div className = "card col-md-12 bg-dark">
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Generic Name</label>
                                            <input placeholder = "Generic Name" name = "genericName" className = "form-control" value = {this.state.genericName} onChange = {this.changeGenericNameHandler}/>
                                        </div>
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Trade Name</label>
                                            <input placeholder = "Trade Name" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Unit Price</label>
                                            <input type = "number" placeholder = "Unit Price" name = "unitPrice" className = "form-control" value = {this.state.unitPrice} onChange = {this.changeUnitPriceHandler}/>
                                        </div>
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Quantity</label>
                                            <input type = "number" placeholder = "Quantity" name = "quantity" className = "form-control" value = {this.state.quantity} onChange = {this.changeQuantityHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Manufacture Date</label>
                                            <input type="date" placeholder = "Manufacture Date" name = "manuDate" className = "form-control" value = {this.state.manuDate} onChange = {this.changeManuDateHandler}/>
                                        </div>
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Expiry Date</label>
                                            <input type="date" placeholder = "Expiry Date" name = "expDate" className = "form-control" value = {this.state.expDate} onChange = {this.changeExpDateHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green"> Storage Location</label>
                                            <select name="storageLocation" id="storageLocation" className = "form-control" value = {this.state.storageLocation} onChange = {this.changeStorageLocationHandler}>
                                                <option value="Cupboard">Cupboard</option>
                                                <option value="Fridge">Fridge</option>
                                            </select>                                    
                                        </div>
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Buffer Stock</label>
                                            <input type = "number" placeholder = "Buffer Stock" name = "bufferStock" className = "form-control" value = {this.state.bufferStock} onChange = {this.changeBufferStockHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Department</label> <br/>
                                            <select name="department" id="department" className = "form-control" value = {this.state.department} onChange = {this.changeDepartmentHandler}>
                                                <option value="1">Pharmacy</option>
                                                <option value="2">OPD</option>
                                                <option value="3">Channeling Center</option>
                                                <option value="4">Laboratory</option>
                                            </select>
                                        </div>
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Supplier</label>
                                            <select name="supplierId" id="supplierId" className = "form-control" value = {this.state.supplierId} onChange = {this.changeSupplierIdHandler}>
                                                <option value="1">Lanka Drugs</option>
                                                <option value="2">Hemas</option>
                                                <option value="3">Durdens</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className = "btn btn-primary" onClick = {this.saveOrUpdateDrug}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageDrugComponent;