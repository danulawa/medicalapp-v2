import React, { Component } from 'react';
import PhaPaymentService from '../../../Services/PhaPayment';

class ManagePaymentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            phaPaymentId: this.props.match.params.phaPaymentId,
            payDate: '',
            description: '',
            discount: '',
            total: '',
            drugName1: '',
            quantity1:'',
            unitPrice1:'',
            totalPrice1: '',
            drugName2: '',
            quantity2:'',
            unitPrice2:'',
            totalPrice2: ''

        }

        this.demo = this.demo.bind(this);
        this.changePayDateHandler = this.changePayDateHandler.bind(this);
        this.changeTotalHandler = this.changeTotalHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.savePayment = this.savePayment.bind(this);

    }

    demo = (d) => {
        d.preventDefault();

        this.setState({payDate: '2020-10-01'});
        this.setState({drugName1: 'Nepsium'});
        this.setState({quantity1: '80'});
        this.setState({unitPrice1: '10'});
        this.setState({totalPrice1: '800'});
        this.setState({drugName2: 'Zyloprim'});
        this.setState({quantity2: '40'});
        this.setState({unitPrice2: '30'});
        this.setState({totalPrice2: '1200'});
        this.setState({total: '1800'});
        this.setState({description: 'This is a demo value'});
        this.setState({discount: '200'});
    }

    changePayDateHandler = (event) => {
        this.setState({payDate: event.target.value});
    }

    changeTotalHandler = (event) => {
        this.setState({total: event.target.value});
    }

    changeDiscountHandler = (event) => {
        this.setState({discount: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }


    savePayment = (p) =>{
        p.preventDefault();

        let phaPayment = {
            payDate: this.state.payDate, 
            description: this.state.description,
            total: this.state.total,
            discount: this.state.discount
        }

        console.log('phaPayment => ' + JSON.stringify(phaPayment));
        console.log('phaPaymentId => ' + JSON.stringify(this.state.phaPaymentId));

        PhaPaymentService.createPayment(phaPayment).then(res => (
            this.props.history.push('/pharmacy/all-payments')
        ));

    }

    cancel(){
        this.props.history.push('/pharmacy/all-payments');
    }

    render() {
        return (
            <div>
                <div className = "login-top"></div>
                <div className = "container py-5">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">Pharmacy - New Payment</h1>
                </div>
                    <div className = "row">
                        <div className = "card col-md-12 bg-dark">
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group row">
                                        <div className = "col-sm-3"></div>
                                        <div className = "col-sm-3"></div>
                                        <div className = "col-sm-3"></div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Payment Date</label>
                                            <input type="date" placeholder = "Payment Date" name = "payDate" className = "form-control" value = {this.state.payDate} onChange = {this.changePayDateHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Drug Name</label>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Quantity</label>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Unit Price</label>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Total</label>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-3">
                                            <input placeholder = "Drug Name" name = "drugName" className = "form-control" value = {this.state.drugName1}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <input type = "number" placeholder = "Quantity" name = "tradeName" className = "form-control" value = {this.state.quantity1}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <input type = "number" placeholder = "Unit Price" name = "tradeName" className = "form-control" value = {this.state.unitPrice1}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <input type = "number" placeholder = "Total" name = "tradeName" className = "form-control" value = {this.state.totalPrice1}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-3">
                                            <input placeholder = "Drug Name" name = "tradeName" className = "form-control" value = {this.state.drugName2}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <input type = "number" placeholder = "Quantity" name = "tradeName" className = "form-control" value = {this.state.quantity2}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <input type = "number" placeholder = "Unit Price" name = "tradeName" className = "form-control" value = {this.state.unitPrice2}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <input type = "number" placeholder = "Total" name = "tradeName" className = "form-control" value = {this.state.totalPrice2}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Description</label>
                                            <input type = "textarea" placeholder = "Description" name = "description" className = "form-control" value = {this.state.description} onChange = {this.changeDescriptionHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Discount</label>
                                            <input type = "number" placeholder = "Discount" name = "discount" className = "form-control" value = {this.state.discount} onChange = {this.changeDiscountHandler}/>
                                        </div>
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Grand Total</label>
                                            <input type = "number" placeholder = "Grand Total" name = "total" className = "form-control" value = {this.state.total} onChange = {this.changeTotalHandler}/>
                                        </div>
                                    </div>

                                    <button className = "btn btn-success" onClick={this.savePayment}>Save</button>
                                    <button className = "btn btn-primary" style = {{marginLeft: "10px"}} onClick={() => window.print()}>Print</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                    <button className = "btn btn-warning" onClick = {this.demo} style = {{marginLeft: "10px"}}>Demo</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagePaymentComponent;