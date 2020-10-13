import React, { Component } from 'react';

class ManagePaymentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

        this.savePayment = this.savePayment.bind(this);

    }

    savePayment = (p) =>{
        p.preventDefault();
    }

    render() {
        return (
            <div>
                <div className = "login-top"></div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">Pharmacy - New Payment</h1>
                </div>
                <div className = "container py-5">
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
                                            <input placeholder = "Drug Name" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Quantity</label>
                                            <input type = "number" placeholder = "Quantity" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Unit Price</label>
                                            <input type = "number" placeholder = "Unit Price" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Total</label>
                                            <input type = "number" placeholder = "Total" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Drug Name</label>
                                            <input placeholder = "Drug Name" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Quantity</label>
                                            <input type = "number" placeholder = "Quantity" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Unit Price</label>
                                            <input type = "number" placeholder = "Unit Price" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                        <div className = "col-sm-3">
                                            <label className = "form-label-green">Total</label>
                                            <input type = "number" placeholder = "Total" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Description</label>
                                            <input type = "textarea" placeholder = "Description" name = "tradeName" className = "form-control" value = {this.state.tradeName} onChange = {this.changeTradeNameHandler}/>
                                        </div>
                                    </div>
                                    <div className = "form-group row">
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Discount</label>
                                            <input type = "number" placeholder = "Discount" name = "unitPrice" className = "form-control" value = {this.state.unitPrice} onChange = {this.changeUnitPriceHandler}/>
                                        </div>
                                        <div className = "col-sm-6">
                                            <label className = "form-label-green">Grand Total</label>
                                            <input type = "number" placeholder = "Grand Total" name = "quantity" className = "form-control" value = {this.state.quantity} onChange = {this.changeQuantityHandler}/>
                                        </div>
                                    </div>

                                    <button className = "btn btn-success" onClick={() => window.print()} onClick={() => window.print()}>Save</button>
                                    <button className = "btn btn-danger" style = {{marginLeft: "10px"}}>Cancel</button>
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