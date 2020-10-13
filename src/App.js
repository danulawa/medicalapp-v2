import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//CSS Imports
import './App.css';
import './CSS/SignIn.css';
import './CSS/Chamathka.css';

//Constants File
import * as Const from './Constants';

//Layouts Imports
import DashboardLayout from './Layouts/DashboardLayout';
import OtherLayout from './Layouts/OtherLayout';

//Components Imports
import LoginComponent from './Components/Main & Login/LoginComponent';
import DashboardMain from './Components/Dashboard/1Main/DashboardMain';
import AllDrugsComponent from './Components/Dashboard/Pharmacy/AllDrugsComponent';
import ManageDrugComponent from './Components/Dashboard/Pharmacy/ManageDrugComponent';
import ViewDrugComponent from './Components/Dashboard/Pharmacy/ViewDrugComponent';
import ListUtilityComponent from './Components/Dashboard/Finance/ListUtilityComponent';
import AddUtilityComponent from './Components/Dashboard/Finance/AddUtilityComponent';
import UpdateUltilityComponent from './Components/Dashboard/Finance/UpdateUltilityComponent';
import UtilityBillComponent from './Components/Dashboard/Finance/UtilityBillComponent';
import PrintDetailsComponent from './Components/Dashboard/OPD/PrintDetailsComponent';
import UpdateEquipmentComponent from './Components/Dashboard/OPD/UpdateEquipmentComponent';
import CreateEquipmentCompenent from './Components/Dashboard/OPD/CreateEquipmentCompenent';
import ListEquipmentComponent from './Components/Dashboard/OPD/ListEquipmentComponent';
import ListPatientComponent from './Components/Dashboard/ExternalUser/ListPatientComponent';
import CreatePatientComponent from './Components/Dashboard/ExternalUser/CreatePatientComponent';
import UpdatePatientComponent from './Components/Dashboard/ExternalUser/UpdatePatientComponent';
import ListEmployeeComponent from './Components/Dashboard/InternalUser/ListEmployeeComponent';
import CreateEmployeeComponent from './Components/Dashboard/InternalUser/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/Dashboard/InternalUser/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/Dashboard/InternalUser/ViewEmployeeComponent';
import createLabComponent from './Components/Dashboard/Laboratory/createLabComponent';
import LabReportComponent from './Components/Dashboard/Laboratory/LabReportComponent';
import UpdateLabComponent from './Components/Dashboard/Laboratory/UpdateLabComponent';
import ListNotificationComponent from './Components/Dashboard/Channeling/ListNotificationComponent';
import CreateNotificationComponent from './Components/Dashboard/Channeling/CreateNotificationComponent';
import UpdateNotificationComponent from './Components/Dashboard/Channeling/UpdateNotificationComponent';
import ViewNotificationComponent from './Components/Dashboard/Channeling/ViewNotificationComponent';
import ManagePaymentComponent from './Components/Dashboard/Pharmacy/ManagePaymentComponent';

const AppRoute =  ({component:Component, layout:Layout, ...rest}) => (
  <Route {...rest} render = {props =>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)

function App() {
  return (
    <Router>
      <AppRoute path = "/" exact layout = {OtherLayout} component = {LoginComponent} />
      <AppRoute path = {Const.mainDashboard} layout = {DashboardLayout} component = {DashboardMain} />

      <AppRoute path = "/pharmacy/all-drugs" layout = {DashboardLayout} component = {AllDrugsComponent} />
      <AppRoute path = "/pharmacy/manage-drug/:drugId" layout = {DashboardLayout} component = {ManageDrugComponent} />
      <AppRoute path = "/pharmacy/view-drug/:drugId" layout = {DashboardLayout} component = {ViewDrugComponent} />
      <AppRoute path = "/pharmacy/add-payment" layout = {OtherLayout} component = {ManagePaymentComponent} />

      <AppRoute path = "/finance/all-utility" layout = {DashboardLayout} component = {ListUtilityComponent} />
      <AppRoute path = "/finance/add-utility" layout = {DashboardLayout} component = {AddUtilityComponent} />
      <AppRoute path = "/finance/update-utility/:id" layout = {DashboardLayout} component = {UpdateUltilityComponent} />
      <AppRoute path = "/finance/utility-bill" layout = {DashboardLayout} component = {UtilityBillComponent} />

      <AppRoute path = "/opd/equipment" layout = {DashboardLayout} component = {ListEquipmentComponent} />
      <AppRoute path = "/opd/add-equipment" layout = {DashboardLayout} component = {CreateEquipmentCompenent} />
      <AppRoute path = "/opd/update-equipment/:eqId" layout = {DashboardLayout} component = {UpdateEquipmentComponent} />
      <AppRoute path = "/opd/print-details/:eqId" layout = {OtherLayout} component = {PrintDetailsComponent} />

      <AppRoute path = "/extuser/patients" layout = {DashboardLayout} component = {ListPatientComponent} />
      <AppRoute path = "/extuser/add-patient" layout = {DashboardLayout} component = {CreatePatientComponent} />
      <AppRoute path = "/extuser/update-patient/:Id" layout = {DashboardLayout} component = {UpdatePatientComponent} />

      <AppRoute path = "/intuser/employees" layout = {DashboardLayout} component = {ListEmployeeComponent} />
      <AppRoute path = "/intuser/add-employee" layout = {DashboardLayout} component = {CreateEmployeeComponent} />
      <AppRoute path = "/intuser/update-employee/:Id" layout = {DashboardLayout} component = {UpdateEmployeeComponent} />
      <AppRoute path = "/intuser/view-employee/:Id" layout = {DashboardLayout} component = {ViewEmployeeComponent} />

      <AppRoute path = "/lab/labDetails" layout = {DashboardLayout} component = {createLabComponent} />
      <AppRoute path = "/lab/add-labDetails" layout = {DashboardLayout} component = {createLabComponent} />
      <AppRoute path = "/lab/lab-report" layout = {DashboardLayout} component = {LabReportComponent} />
      <AppRoute path = "/lab/update-lab/:labId" layout = {DashboardLayout} component = {UpdateLabComponent} />

      <AppRoute path = "/channeling/notifications" layout = {DashboardLayout} component = {ListNotificationComponent} />
      <AppRoute path = "/channeling/add-notification" layout = {DashboardLayout} component = {CreateNotificationComponent} />
      <AppRoute path = "/channeling/update-notification/:id" layout = {DashboardLayout} component = {UpdateNotificationComponent} />
      <AppRoute path = "/channeling/view-notification/:id" layout = {DashboardLayout} component = {ViewNotificationComponent} />
    </Router>
  );
}

export default App;
