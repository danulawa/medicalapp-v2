import React, { Component } from 'react';
import PhaPaymentService from '../../../Services/PhaPayment';

class AllPaymentsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            payment: []

        }

        this.deletePayment = this.deletePayment.bind(this);

    }

    componentDidMount(){
        PhaPaymentService.getAllPayments().then((res) => {
            this.setState({payment: res.data});
        });
    }

    deletePayment(phaPaymentId){
        PhaPaymentService.deletePayment(phaPaymentId).then((res) => {
            this.setState({payment: this.state.payment.filter(payment=> payment.phaPaymentId !== phaPaymentId)});
        })
    }

    render() {
        return (
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">Pharmacy - All Payments</h1> <br/>
                </div>
                <br/>
                <div>
                    <table className = "table table-striped">
                        <thead>
                             <tr style = {{backgroundColor:"#343a40", color:"#1cbe7b"}}>
                                 <th> Payment Description </th>
                                 <th> Payment Date </th>
                                 <th> Payment Discount </th>
                                 <th> Payment Total </th>
                                 <th> Payment Actions </th>
                             </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payment.map(
                                    payment =>
                                    <tr key = {payment.phaPaymentId}>
                                        <td> {payment.description} </td>
                                        <td> {payment.payDate} </td>
                                        <td> {payment.discount} </td>
                                        <td> {payment.total} </td>
                                        <td>
                                            <button onClick = {() => this.deletePayment(payment.phaPaymentId)} style={{marginLeft: "10px"}} className = "btn btn-danger">Delete</button> <br/>
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

export default AllPaymentsComponent;