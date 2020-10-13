import React, { Component } from 'react';
import UtilityService from '../../../Services/UtilityService';

class UpdateUltilityComponent extends Component {
    constructor(props){
        super(props)
        this.state={
        
            id:this.props.match.params.id,
            date: '',
            expenseName: '',
            description:'',
            amount:''
        
        }
        
        this.changeDate = this.changeDate.bind(this);
        //------------changeExpensess
        this.changeExpense = this.changeExpense.bind(this);

        //this.changeExpense = this.changeExpense.bind(this);

        this.changeDescription = this.changeDescription.bind(this);
        this.changeAmount = this.changeAmount.bind(this);

        this.updateUtility = this.updateUtility.bind(this);
    }


    componentDidMount(){
        UtilityService.getUtilityById(this.state.id).then((res) =>{
            let utility = res.data;
            this.setState({date: utility.date,
                expenseName:utility.expenseName,
                description:utility.description,
                amount:utility.amount
            });
        });
    }

    updateUtility = (e) =>{
        e.preventDefault();
        let utility = {date: this.state.date,expenseName: this.state.expenseName,description: this.state.description,amount:this.state.amount};
        console.log('utility =>' + JSON.stringify(utility));
        UtilityService.updateUtility(utility,this.state.id).then(res =>{
            this.props.history.push('/finance/all-utility');
        });


        
    }

    changeDate= (event)=>{
        this.setState({date: event.target.value});
    }

    /*changeExpense= (event)=>{
        this.setState({expense: event.target.value});
    }*/

    changeExpense=(event)=>{
        this.setState({expenseName: event.target.value});
    }

    changeDescription= (event)=>{
        this.setState({description: event.target.value});
    }

    changeAmount= (event)=>{
        this.setState({amount: event.target.value});
    }

    cancel(){

        this.props.history.push('/finance/all-utility');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offaet-md-3">
                        <h3 className="text-center">Update Utility expencess</h3>
                        <div className="card-body">
                            <form>

                            <div className="form-group">
                                    <lable>Date(YYYY.MM.DD)</lable>
                                    <input placeholder="Date" input type="date" name="date" className="form-control" value={this.state.date} onChange={this.changeDate}/>
                                </div>
                                
                                

                                <div className="form-group">
                                    <label>Select the Expence: </label>
                                    <select value={this.state.expenseName} onChange={this.changeExpense}>
                                    <option expenseName="select">--Select--</option>
                                        <option expenseName="electricity">Electricity</option>
                                        <option expenseName="water">Water</option>
                                        <option expenseName="telecommiunication">Telecommiunication</option>
                                        <option expenseName="repair">Repair</option>
                                    </select>
                                </div>
                                

                                <div className="form-group">
                                    <lable>Description</lable>
                                    <input placeholder="Description" name="description" className="form-control" value={this.state.description} onChange={this.changeDescription}/>
                                </div>

                                <div className="form-group">
                                    <lable>Amount</lable>
                                    <input placeholder="Amount" name="amount" className="form-control" value={this.state.amount} onChange={this.changeAmount}/>
                                </div>

                                <button className="btn btn-success" onClick={this.updateUtility}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateUltilityComponent;