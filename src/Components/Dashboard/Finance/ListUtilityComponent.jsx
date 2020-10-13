import React, { Component } from 'react';
import UtilityService from '../../../Services/UtilityService';

class ListUtilityComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            utility: []
        }
        //2 add utility button
        this.addUtility=this.addUtility.bind(this);
        this.editUtility=this.editUtility.bind(this);
        this.deleteUtility=this.deleteUtility.bind(this);
        this.utilityReport=this.utilityReport.bind(this);
       
    }

    //report genarate----
    utilityReport(){
        this.props.history.push('/finance/utility-bill');
    }


    //-------------------

    deleteUtility(id){
        UtilityService.deleteUtility(id).then(res =>{
            this.setState({utility: this.state.utility.filter(utility => utility.id !== id)});
        });
     }

    editUtility(id){
        this.props.history.push(`/finance/update-utility/${id}`);
        

    }
     
    componentDidMount(){
        UtilityService.getUtility().then((res)=>{
            this.setState({utility:res.data});
        })
    }
//3 add employee method
    addUtility(){
    this.props.history.push('/finance/add-utility');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Utility Expensess</h2>
                <button className="btn btn-link" onClick={this.utilityReport}>Utility Report</button>
                
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUtility}>Add Utility</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Expense name</th>
                                <th>Description</th>
                                <th>amount</th>
                                <th>Options</th>
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
                                        <td>
                                         <button onClick ={() => this.editUtility(utility.id)} className="btn btn-success">Update</button>
                                         <button style={{marginLeft:"10px"}} onClick ={() => this.deleteUtility(utility.id)} className="btn btn-danger">Delete</button>   
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

export default ListUtilityComponent;