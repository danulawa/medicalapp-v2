import React, { Component } from 'react';
import EquipmentService from '../../../Services/EquipmentService';



class PrintDetailsComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
            eqId:this.props.match.params.eqId,
            equipment: {}
        }
    }

    componentDidMount(){
        EquipmentService.getEquipmentById(this.state.eqId).then(res =>{
            this.setState({equipment: res.data});
        })
    }
    render() {
        return (
            <div className="card col-md-6 offset-md-3">
                  
                    
                   
                    <div className="card-body">
                    <div className="text-center">
                    <img src = {require('./logoA.jpg')} width="72" height="72" alt="logo" />
                    </div>
                    <h1 className="text-center h1C">OPD Equipment Details</h1>
                    <br></br>
                    <table style={{width:440,marginLeft:10}} className="table table-striped table-bordered" >
                    <thead>
                     <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label >Equipment Name :</label></td>
                        <td>{ this.state.equipment.eqName }</td>
                    </tr>
                    <tr>
                        <td><label>Storage : </label></td>
                        <td>{ this.state.equipment.estorage }</td>             
                    </tr>
                    <tr>
                        <td><label>Unit Price:</label></td>
                        <td>{ this.state.equipment.euprice }</td>
                    </tr>
                    <tr>
                        <td><label>Quantity:</label></td>
                        <td>{ this.state.equipment.equantity }</td>
                    </tr>
                    <tr>
                        <td><label>Brand:</label></td>
                        <td>{ this.state.equipment.etrade }</td>
                    </tr>
                    <tr>
                        <td><label>Received Date:</label></td>
                        <td>{ this.state.equipment.e_IS_Date }</td>
                    </tr>
                    <tr>
                        <td><label>Expiration Date:</label></td>
                        <td>{ this.state.equipment.e_Ex_Date }</td> 
                    </tr> 
                    </tbody>
                    </table>
                        <table style={{width: 800}}>
                           
                            <tr>
                                <td>Sub Total</td>
                                <td>{this.state.equipment.euprice} X {this.state.equipment.equantity}<br></br>
                                {this.state.equipment.euprice * this.state.equipment.equantity}</td>
                            </tr>
                            <br/>
                            <tr>
                                <td>Tax</td>
                                <td>{this.state.equipment.euprice * this.state.equipment.equantity}X0.02<br></br>
                                {this.state.equipment.euprice * this.state.equipment.equantity*0.02}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <td>Total</td>
                                <td>{this.state.equipment.euprice * this.state.equipment.equantity*0.02+this.state.equipment.euprice * this.state.equipment.equantity}</td>
                            </tr>
                       
                        </table>
                        <br></br>
                        <button onClick={() => window.print()} className="buttonC">PRINT</button>
                    </div>
            </div>

        )   
    }    
}

export default PrintDetailsComponent;
