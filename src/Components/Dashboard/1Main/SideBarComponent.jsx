import React, { Component } from 'react';
import logoA from '../../../Images/logoA.jpg';

class SideBarComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
        <nav class="col-md-31 d-none d-md-block bg-dark sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column" style = {{marginTop:"5px"}}>
                    <li className = "nav-item"> 
                        <a className = "nav-link"> 
                        <img className = "logoA" src={logoA} alt="User"/>
                        <label style = {{margin:"10px"}}> Danula Wanasinghe </label>  </a> 
                    </li>
                </ul>
                <hr style = {{marginBottom:"10px", backgroundColor:"#fff", width:"95%"}}/>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href = "/dashboard">The Dashboard</a>
                    </li>
                    <li class = "nav-item dropdown">
   				        <a href="#pharmacyDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link">Pharmacy</a>
   				        <ul class="collapse list-unstyled" id="pharmacyDrop">
   					        <li> <a class = "dropdown-itemm" href="/pharmacy/manage-drug/add">Add New Drug</a> </li>
                            <li> <a class = "dropdown-itemm" href="/pharmacy/all-drugs"> View All Drugs</a> </li>
                            <li> <a class = "dropdown-itemm" href="/pharmacy/add-payment">Add Payment</a> </li>
                            <li> <a class = "dropdown-itemm" href="/pharmacy/all-payments">View All Payments</a> </li>
   				        </ul> 
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#opdDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link">Outer Patient Department</a>
   				        <ul class="collapse list-unstyled" id="opdDrop">
   					        <li> <a class = "dropdown-itemm" href="/opd/equipment">All Equipments</a> </li>
                            <li> <a class = "dropdown-itemm" href="/opd/add-equipment">New Equipment</a> </li>
   				        </ul> 
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#channelingDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link">Channeling Services</a>
   				        <ul class="collapse list-unstyled" id="channelingDrop">
   					        <li> <a class = "dropdown-itemm" href="/time">Time Table</a> </li>
                            <li> <a class = "dropdown-itemm" href="/notifications">Notifications</a> </li>
   				        </ul> 
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#labDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link">Laboratory</a>
   				        <ul class="collapse list-unstyled" id="labDrop">
   					        <li> <a class = "dropdown-itemm" href="/lab/add-labDetails">New Lab Test</a> </li>
                            <li> <a class = "dropdown-itemm" href="#">All Lab Tests</a> </li>
                            <li> <a class = "dropdown-itemm" href="/lab/lab-report">Lab Report</a> </li>
   				        </ul>
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#financeDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link">Finance</a>
   				        <ul class="collapse list-unstyled" id="financeDrop">
   					        <li> <a class = "dropdown-itemm" href="/finance/add-utility">New Utility Payment</a> </li>
                            <li> <a class = "dropdown-itemm" href="/finance/all-utility">All Utility Payments</a> </li>
                            <li> <a class = "dropdown-itemm" href="/finance/utility-bill">Utility Report</a> </li>
   				        </ul>
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#extDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link">External Users</a>
   				        <ul class="collapse list-unstyled" id="extDrop">
   					        <li> <a class = "dropdown-itemm" href="/extuser/add-patient">New Patient</a> </li>
                            <li> <a class = "dropdown-itemm" href="/extuser/patients">All Patients</a> </li>
                            <li> <a class = "dropdown-itemm" href="#">New Supplier</a> </li>
                            <li> <a class = "dropdown-itemm" href="#">All Suppliers</a> </li>
   				        </ul>
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#intDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link">Internal Users</a>
   				        <ul class="collapse list-unstyled" id="intDrop">
                            <li> <a class = "dropdown-itemm" href="/doctors">All Doctors</a> </li>
                            <li> <a class = "dropdown-itemm" href="/employees">All Employees</a> </li>
   				        </ul>
   			        </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default SideBarComponent;