import React, { Component } from 'react';
import EquipmentService from '../../../Services/EquipmentService';
//import '../App.css';

const validateForm = (formErrors) => {
    let valid = true;
    Object.values(formErrors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  
/*const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (count = count+1)
    );
    return count;
  }*/
  
  
class CreateEquipmentCompenent extends Component {
     
        constructor(props){
          super(props)
          this.state = {
             // errorCount: '',
             
              eqName: '',
              euprice: '',
              equantity: '',
              e_IS_Date:'',
              e_Ex_Date:'',
              etrade:'',
              estorage:'',
        
              formErrors: {
              eqName: '',
              euprice: '',
              equantity: '',
              e_IS_Date:'',
              e_Ex_Date:'',
              etrade:'',
              estorage:''
              }
            }
              this.changeNamehandler = this.changeNamehandler.bind(this);
              this.changePricehandler = this.changePricehandler.bind(this);
              this.changeQuantityhandler = this.changeQuantityhandler.bind(this);
              this.changeStoragehandler = this.changeStoragehandler.bind(this);
              this.changeBrandhandler = this.changeBrandhandler.bind(this);
              this.changeISDatehandler = this.changeISDatehandler.bind(this);
              this.changeExDatehandler = this.changeExDatehandler.bind(this);
        }       
     

        handleSubmit = (e) => {
          e.preventDefault();
          
          //this.setState({errorCount: countErrors(this.state.formErrors)});
          this.setState({formValid: validateForm(this.state.formErrors)});
          let equipment ={eqName:this.state.eqName,estorage:this.state.estorage,euprice:this.state.euprice,equantity:this.state.equantity,etrade:this.state.etrade,e_IS_Date:this.state.e_IS_Date,e_Ex_Date:this.state.e_Ex_Date}
          console.log('equipment => ' +JSON.stringify(equipment));
            
          EquipmentService.createEquipment(equipment).then(res =>{
              this.props.history.push('/opd/equipment');
          });
        }
        changeNamehandler = (event) => {

            event.preventDefault();
            const { name, value } = event.target;
            let formErrors = this.state.formErrors;
    
            this.setState({eqName: event.target.value});

            formErrors.eqName = 
            value.length < 3
              ? 'Item Name must be at least 3 characters!'
              : '';

            this.setState({formErrors, [name]: value});
        }
      
        changeStoragehandler = (event) =>{
            event.preventDefault();
            const { name, value } = event.target;
            let formErrors = this.state.formErrors;
            
            this.setState({estorage: event.target.value});

            formErrors.estorage = 
            value.length < 3
              ? 'Item Name must be at least 3 characters!'
              : '';

            this.setState({formErrors, [name]: value});
        }

        changePricehandler = (event) =>{
            event.preventDefault();
            const { name, value } = event.target;
            let formErrors = this.state.formErrors;

            this.setState({euprice: event.target.value});

           
            formErrors.euprice = 
              value.length < 1
              ? 'Price cannot be null!'
              : '';
             
            this.setState({formErrors, [name]: value});
        }

        changeQuantityhandler = (event) =>{
            this.setState({equantity :event.target.value});
        }
        changeBrandhandler = (event) =>{
            this.setState({etrade: event.target.value});
        }

        changeISDatehandler = (event) =>{
            this.setState({e_IS_Date: event.target.value});
        }

        changeExDatehandler = (event) =>{
            this.setState({e_Ex_Date: event.target.value});
        }

      

        /*cancel(){
            this.props.history.push('/equipment');
        }*/
    render() {
    const {formErrors} = this.state;
    return(
      <div className="container" style={{backgroundColor: "#e9fcf4"}} >
        <div className="row" >
        <div className = "card col-md-6 offset-md-3" >
          <div className="text-center">
            <img src = {require('./logoA.jpg')} width="72" height="72" alt="logo" />
          </div>
        <h1 className="text-center h1C" >OPD Equipment suppliment</h1>
        <div className = "card-body" >
          <form onSubmit={this.handleSubmit} noValidate >
            
          <div className = "form-group">
            <label className="labelC">Item Name :</label><br/>
            <input className="inputC"
              type="text" 
              value={this.state.eqName} 
              name="eqName" 
              placeholder="Item Name"
              //onChange={this.handleChange}
              onChange={this.changeNamehandler}
              required
              noValidate
            />
            {formErrors.eqName.length > 0 && 
             <span className='error'>{formErrors.eqName}</span>}
            </div>
            <div className = "form-group">
            

            <label className="labelC">Storage :</label><br/>
            <input className="inputC"
              type="text" 
              value={this.state.estorage} 
              name="estorage" 
              placeholder="estorage"
              onChange={this.changeStoragehandler}
              noValidate
            />
            {formErrors.estorage.length > 0 && 
             <span className='error'>{formErrors.estorage}</span>}
            </div>
            <div className = "form-group">
          <label className="labelC">Unit price</label><br/>
          <input className="inputC"
            type="number" 
            step="100"
            pattern="[0-9]*"
            value={this.state.euprice} 
            name="euprice"
            placeholder="Price" 
            onChange={this.changePricehandler}
          />
            {formErrors.euprice.length > 0 && 
             <span className='error'>{formErrors.euprice}</span>}
        </div>
        <div className = "form-group">
          <label className="labelC">Quantity :</label><br/>
          <input className="inputC"
             type="number" 
             pattern="[0-9]*[.]?[0-9]+"
             step="25"
            value={this.state.equantity} 
            name="equantity"
            placeholder="Quantity" 
            onChange={this.changeQuantityhandler}
          />
          
        </div>
        <div className = "form-group">
          <label className="labelC">Brand :</label><br/>
          <input className="inputC"
            type="text" 
            value={this.state.etrade} 
            name="etrade"
            placeholder="Brand" 
            onChange={this.changeBrandhandler}
          />
         </div> 
         <div className = "form-group">
              <br></br>
              <h5 >Date details</h5>
            <label className="labelC">Received Date :</label>
            <input className="inputC"
              type="Date" 
              value={this.state.e_IS_Date} 
              name="e_IS_Date" 
              placeholder="Date " 
              onChange={this.changeISDatehandler}
            />
        </div>
        <div className = "form-group">
            <label className="labelC">Expiration Date :</label>
            <input className="inputC"
              type="Date" 
              value={this.state.e_Ex_Date} 
              name="e_Ex_Date" 
              placeholder="Expiration Date " 
              onChange={this.changeExDatehandler}
            />
        </div>
          <br></br>
        
          <button type="Submit" className="btn btn-success buttonC" onClick={this.handleSubmit}>Submit</button>
        
          </form>
          </div>
        </div>
        </div>
      </div>
      
    )
   }
}
      
    


export default CreateEquipmentCompenent;
