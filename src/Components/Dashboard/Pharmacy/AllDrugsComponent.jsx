import React, { Component } from 'react';
import DrugService from '../../../Services/DrugService';

class AllDrugsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            drug: []
        }

        this.newDrug = this.newDrug.bind(this);
        this.editDrug = this.editDrug.bind(this);
        this.deleteDrug = this.deleteDrug.bind(this);
        this.viewDrug = this.viewDrug.bind(this);

    }

    componentDidMount(){
        DrugService.getDrugs().then((res) => {
            this.setState({drug: res.data});
        });
    }

    newDrug(){
        this.props.history.push('/pharmacy/manage-drug/add');
    }

    editDrug(drugId){
        this.props.history.push(`/pharmacy/manage-drug/${drugId}`);
    }

    deleteDrug(drugId){
        DrugService.deleteDrug(drugId).then((res) => {
            this.setState({drug: this.state.drug.filter(drug => drug.drugId !== drugId)});
        })
    }

    viewDrug(drugId){
        this.props.history.push(`/pharmacy/view-drug/${drugId}`);
    }

    render() {
        return (
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">Pharmacy - All Drugs</h1> <br/>
                </div>
                <div>
                    <input class="form-control w-25" type="text" placeholder="Search Your Drug Here" aria-label="Search"/>
                </div>
                <br/>
                <div className = "row">
                    <button className = "btn btn-primary btn-green-dark" onClick = {this.newDrug}>New Drug</button>
                </div>
                <br/>
                <div>
                    <table className = "table table-striped">
                        <thead>
                             <tr style = {{backgroundColor:"#343a40", color:"#1cbe7b"}}>
                                 <th> Trade Name </th>
                                 <th> Generic Name </th>
                                 <th> Unit Price </th>
                                 <th> Available Quantity </th>
                                 <th> Drug Actions </th>
                             </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.drug.map(
                                    drug =>
                                    <tr key = {drug.drugId}>
                                        <td> {drug.tradeName} </td>
                                        <td> {drug.genericName} </td>
                                        <td> {drug.unitPrice} </td>
                                        <td> {drug.quantity} </td>
                                        <td>
                                            <button onClick = {() => this.viewDrug(drug.drugId)} className = "btn btn-outline-primary btn-green">View</button>
                                            <button onClick = {() => this.editDrug(drug.drugId)} style={{marginLeft: "10px"}} className = "btn btn-primary">Update</button>
                                            <button onClick = {() => this.deleteDrug(drug.drugId)} style={{marginLeft: "10px"}} className = "btn btn-danger">Delete</button> <br/>
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

export default AllDrugsComponent;