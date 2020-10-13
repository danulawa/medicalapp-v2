import React, { Component } from 'react';
import UtilityService from '../../../Services/UtilityService';

class UtilityBillComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            utility: []
        }
    }

    componentDidMount(){
        UtilityService.getUtility().then((res)=>{
            this.setState({utility:res.data});
        })
    }

    cancel(){

        this.props.history.push('/finance/all-utility');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Utility Expensess</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Expense name</th>
                                <th>Description</th>
                                <th>amount</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.utility.map(
                                    utility =>
                                    <tr key ={utility.id}>
                                        <td>{utility.date}</td>
                                        <td>{utility.expenseName}</td>
                                        <td>{utility.description}</td>
                                        <td>{utility.amount}</td>
                                        
                                        
                                    </tr>
                                   
                                )

                                
                            }

                        </tbody>
                        

                    </table>
                    <tr><button className="btn btn-success" onClick={this.cancel.bind(this)}>Back</button></tr>
                    <button className="btn btn-warning" >print</button>
                    
                   
                </div>
                
            </div>
        );
    }
}

export default UtilityBillComponent;